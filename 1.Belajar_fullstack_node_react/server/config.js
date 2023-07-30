require("dotenv").config();
const mongoString = process.env.db;
const mongoose = require("mongoose")

function runDatabase (){
mongoose.connect(mongoString)
const database = mongoose.connection;
database.on("error", (e) => {
  return console.log(e);
});
database.once("connected", () => {
  return console.log("Database connected");
});
}

module.exports = runDatabase