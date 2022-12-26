const mongoose = require("mongoose");
const User = require("./api/Model/game.model");
mongoose.set("strictQuery", true);
mongoose.connect(
    "mongodb+srv://sheraz:sheraz@cluster0.tbhi6hl.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log(err);
  });

const Games = [
  {
    gametypes: "Sports"
  },
  {
    gametypes: "Fighting",
  },
  {
    gametypes: "War",
  },
];

//console.log(Games.length);
const use = async () => {
//await User.deleteMany({});
await User.insertMany(Games);
let len= await User.count(Games);
console.log(len);

// if(Games.count == ""){
// await User.insertMany(Games);
// console.log("error");
//  }
// if(Games.count != ""){
// await User.deleteMany({});
// await User.insertMany(Games);
//  }
// else{

// console.log(error);  
// }
};
use().then(() => {
  mongoose.connection.close();
});
//console.log(Games);