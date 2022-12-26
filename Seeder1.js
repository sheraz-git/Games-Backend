const mongoose = require("mongoose");
const types = require("./api/Model/types.model");
mongoose.set("strictQuery", true);
mongoose
  .connect(
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

const Games1 = [
  {
    gamename: [
      { gamenames: "Cricket",Releazedate:"04-10-1998",Rating:3},
      { gamenames: "Fifa",Releazedate:"04-10-1998",Rating:4},
      { gamenames: "Tennis",Releazedate:"04-10-1998",Rating:5},
    ],
  },
  {
    gamename: [
        { gamenames: "Tekken",Releazedate:"10-5-1995",Rating:3},
        { gamenames: "Combat4",Releazedate:"04-10-1991",Rating:4},
        { gamenames: "Pubg",Releazedate:"04-10-1994",Rating:5},
      ],
  },
  {
       gamename: [
        { gamenames: "missionimmposible",Releazedate:"10-5-1995",Rating:3},
        { gamenames: "Combat6",Releazedate:"04-10-1995",Rating:4},
        { gamenames: "Pubg",Releazedate:"04-10-1997",Rating:5},
     ],
  },

];


//console.log(Games.length);


const use = async () => {
//await User.deleteMany({});
await types.insertMany(Games1);
let len= await types.count(Games1);
console.log(len);

};
use().then(() => {
  mongoose.connection.close();
});
//console.log(Games);