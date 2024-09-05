// import mongoose dependency
const mongoose = require('mongoose');

//import Config from utils/config.js
const config = require('./utils/config')

// import app from app.js
const app = require('./app')

console.log('Connecting to MongoDB....');

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI)
.then(()=>{
    console.log('Connected to DB');
    // Start the Server
    app.listen(config.PORT, ()=>{
        console.log("Server is Running!");
    })
})
.catch((error)=>{
    console.log(error.message);
})
