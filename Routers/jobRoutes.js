const express = require('express')
const jobRouter = express.Router();
const jobController = require('../Controllers/jobController');
const auth = require('../middleware/auth');

// define the endpoints
jobRouter.post('/', auth.verifyToken, jobController.createJob);
jobRouter.get('/', auth.verifyToken, jobController.getAllJobs);
jobRouter.get('/:id', auth.verifyToken, jobController.getJob)

// export the router
module.exports = jobRouter;