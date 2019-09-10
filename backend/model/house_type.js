const mongoose = require('mongoose');

const HouseTypeSchema = mongoose.Schema({
    name: { type: String }
});

module.exports = mongoose.model('house_type', HouseTypeSchema)