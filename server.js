// requiring what we need for develop backend code and connect to db for crud operations.
const express = require('express');
//const bodyParser = require ('body-parser'); // not needed in new version of express
const cors = require ('cors');
const mongoose = require ('mongoose'); // Mongoose is a Object Data Modeling (ODM) library for MongoDB distributed as an npm package.in simple helps to use mongodb in node.js.

require ('dotenv').config(); // to create environmental variable through connection string
// create the express server
const app = express(); 
const PORT = process.env.PORT || 3001;
//Middleware which connects db to our server and allow the access
app.use(cors());
app.use(express.json()); // hence change bodyparser.json to express.json to parse json bcz our server sends and receives dta in the form of json.


// environmental variable (db connection through mongo uri)
const mongoURI = process.env.MONGO_URI;

// Connecting to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true}, // this flag is to establish connection btwn node.js and mongo db deal with the updates to db.
   () => console.log('MongoDB connection establish') );
mongoose.set("strictQuery", true);

// // Error / Disconnection
// db.on('error', err => console.log(err.message + ' is Mongodb not running?'))
// db.on('disconnected', () => console.log('mongo disconnected'))



// starts the server and listen on certain port. 
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
});