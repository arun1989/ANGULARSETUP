('use strict');
const recordSchema = require('../model/records');




module.exports.addRecord = (data) => {
    return new Promise((resolve, reject) => {
        recordSchema(data).save().then(record => {
            resolve(record)
        }).catch((err) => reject(err));
    });
}



module.exports.allRecords = (data) => {
    return new Promise((resolve, reject) => {
        recordSchema.find({}).then(record => {
            resolve(record)
        }).catch((err) => reject(err));
    });
}