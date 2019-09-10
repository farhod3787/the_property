const mongoose = require('mongoose');

const ConvenienceSchema = mongoose.Schema({
    name: { type: String }
});

module.exports = mongoose.model('convenience', ConvenienceSchema)