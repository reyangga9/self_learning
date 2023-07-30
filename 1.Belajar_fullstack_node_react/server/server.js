// config dotenv
require("dotenv").config();
// const {db,port} = require("./config")
const express = require('express')
const app = express();
const port = process.env.port;
const runDatabase =require("./config")

// connect ke database
runDatabase();

// routes ke api
const api = require('./routes/api')
app.use('/',api)


app.listen(port,()=>{
    console.log("Server running in port" +" " +port)
})