('use strict');
const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    fromEmail: {
        type: String
    },
    toEmail: {
        type: String
    },
    latLng:{
        type:[Number],
        index: '2dsphere',
    },
    DueDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ["UNCOMPLETED", "LOWRISK", "NEEDREVIEW"],
        default: "UNCOMPLETED"
    },
    active: {
        type: Boolean,
        default: true
    },
    delete: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('records', Schema);