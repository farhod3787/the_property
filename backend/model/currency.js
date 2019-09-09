const mongoose = require('mongoose');

const CurrencySchema = mongoose.Schema({
    name: { type: String }
});

module.exports = CurrencySchema