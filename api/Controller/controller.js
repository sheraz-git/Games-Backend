const value = require("./../Model/user.model");
const type = require("./../Model/game.model");
const model = require("./../Model/types.model");
const jwt=require("jsonwebtoken");
exports.login = async function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  // var admin = await User.findOne({ email: email, password: password })
  var token = jwt.sign({ userType: "admin" }, "Hello");
  // console.log(jwt_decode(token))
  if ((name === "sheraz", email === "abc@gmail.com", password === "222")) {
    return res.status(200).json({
      message: "login Succefully",
      token,
    });
  } else {
    return res.status(401).json({
      message: "Please admin check your email or password",
    });
  }
};

exports.signup = async function (req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let newUser = new value({
    name,
    email,
    password,
  });
  await newUser.save();
  return res.status(200).json({
    message: "User Added",
  });
};

exports.update2 = async function (req, res) {
    let adduser = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { value: req.body.valuesId } }
    );
    return res.status(200).json({
      adduser,
    });
  };
  
  exports.viewgame = async function (req, res) {
    let user = await value
      .find().populate({
        path: 'value',
        populate: {
            path: 'model',
            select: { name: 1 }
        }
    }).exec((req,docs)=>{
        return res.status(200).json({
            docs,
            user,
        });
    });
  
  };

exports.update = async function (req, res) {
  let adduser = await Game.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { type: req.body.typesId } }
  );
  return res.status(200).json({
    adduser,
  });
};

exports.viewuser2 = async function (req, res) {
  let user = await type.find().populate({ path: "type", select: ["name"] });
  return res.status(200).json({
    user,
  });
};

exports.update1 = async function (req, res) {
  let adduser = await model.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { model: req.body.modelsId } }
  );
  return res.status(200).json({
    adduser,
  });
};

exports.viewuser3 = async function (req, res) {
  let user = await model.find().populate({ path: "model", select: ["name"] });
  return res.status(200).json({
    user,
  });
};

