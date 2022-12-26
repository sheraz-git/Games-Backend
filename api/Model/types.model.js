var mongoose = require("mongoose");
var valid=require("mongoose-unique-validator");
var Schema = mongoose.Schema;
var name = new Schema({
  gamename: {
    type: Array,
    require: true,
     unique:true
  },
  
model:[{type:"ObjectId",ref:"Game"}]
  
});
 name.plugin(valid);
var Model2 = mongoose.model("name", name);
module.exports = Model2;
 