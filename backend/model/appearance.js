const mongoose = require('mongoose');

const AppearanceSchema = mongoose.Schema({
    name: { type: String }
});

module.exports = AppearanceSchema