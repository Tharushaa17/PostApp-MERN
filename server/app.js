const connectDB = require('./db/connect');
const express = require("express");
const app = express();
const post = require('./routes/post');
require('dotenv').config();
const cors = require("cors");
const bodyParser = require("body-parser");

// middelware
app.use(express.json())
  //MIDDLEWARE

  app.use(bodyParser.json({limit: "30mb", extended: true}));
  app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
  app.use(cors());

//routes

const port =  5000;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is Listing to port : ${port} & DB Connected!`));
    } catch (error) {
        console.log(error);
    }
}

app.use('/posts', post)

start();