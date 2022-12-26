var mongoose = require("mongoose");
var valid=require("mongoose-unique-validator");
var Schema = mongoose.Schema;
var Game = new Schema({
  gametypes: {
    type: String,
    require: true,
     unique:true
  },

type:[{type:"ObjectId",ref:"name"}]
});
 Game.plugin(valid);
var Model1 = mongoose.model("Game", Game);
module.exports = Model1;
 