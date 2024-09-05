// require express dependency
const express = require('express')

// import CORS
const cors = require('cors');
const userRouter = require('./Routers/userRoutes.js');
const jobRouter = require('./Routers/jobRoutes.js')
const cookieParser = require('cookie-parser')

// create an express application
const app = express()

// use the cors middleware
app.use(cors());

// use cookie parser
app.use(cookieParser());

// parse the request body as JSON
app.use(express.json());

// define the end points
app.use('/api/users', userRouter)
app.use('/api/jobs', jobRouter)

// export the app
module.exports = app;