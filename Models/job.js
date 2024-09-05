const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: String,
    position: String,
    jobLocation: {
        type: String,
        default: 'Unknown'
    },
    jobStatus: {
        type: String,
        enum: ['open', 'closed', 'pending'],
        default: 'pending'
    },
    jobType: {
        type: String,
        enum: ['full-time', 'part-time','contract' ,'internship'],
        default: 'full-time',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
}, {timestamps: true});

module.exports = mongoose.model('Job', JobSchema, 'jobs');