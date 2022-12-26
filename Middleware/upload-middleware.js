const express = require('express');
const multer  = require('multer');
const app = express();
app.use(express.static(__dirname+'api/uploads'))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './api/uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + ".jpg")
    }
  })
  
const upload = multer({ storage: storage })
module.exports = upload