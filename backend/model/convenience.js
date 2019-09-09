const mongoose = require('mongoose');

const ConvenienceSchema = mongoose.Schema({
    name: { type: String }
});

module.exports = ConvenienceSchema