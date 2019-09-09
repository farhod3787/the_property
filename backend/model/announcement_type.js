const mongoose = require('mongoose');

const AnnouncementTypeSchema = mongoose.Schema({
    name: { type: String }
});

module.exports = AnnouncementTypeSchema