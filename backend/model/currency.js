const mongoose = require('mongoose');

const CurrencySchema = mongoose.Schema({
    name: { type: String }
});

module.exports = mongoose.model('currency', CurrencySchema)