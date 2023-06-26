const connectDB = require('./db/connect');
const express = require("express");
const app = express();
const post = require('./routes/post');
require('dotenv').config();

// middelware
app.use(express.json())

//routes
app.use('/post', post)

const port =  8080;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is Listing to port : ${port} & DB Connected!`));
    } catch (error) {
        console.log(error);
    }
}

start();