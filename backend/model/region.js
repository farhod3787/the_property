const mongoose = require('mongoose');

const RegionSchema = mongoose.Schema({
    name: { type: String }
});

module.exports = RegionSchema