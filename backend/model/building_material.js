const mongoose = require('mongoose');

const BuildingMaterialSchema = mongoose.Schema({
    name: { type: String }
});

module.exports = BuildingMaterialSchema