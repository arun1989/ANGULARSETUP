const mongoose = require('mongoose');

const exceptionSchema = new mongoose.Schema({

    message: {
        type: String,
        default: ""
    },
    time: {
        type: Date
    },
    stack: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    },
    statusCode: {
        type: Number
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('exceptionlogs', exceptionSchema)