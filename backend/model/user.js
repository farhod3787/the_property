const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    number: { type: String },
    avatar: { type: String }
});

module.exports = UserSchema