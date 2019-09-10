const mongoose = require('mongoose');

const BuildingMaterialSchema = mongoose.Schema({
    name: { type: String }
});

module.exports = mongoose.model('building_material', BuildingMaterialSchema)