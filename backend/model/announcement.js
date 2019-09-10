const mongoose = require('mongoose');

const AnnouncementSchema = mongoose.Schema({
    user_id: { type: String },
    region_id: { type: String },
    gallery: [{ url: String }],
    classification: { type: String },
    location: { type: String },
    rooms_number: { type: Number },
    room_allocation: { type: Boolean },
    floor: { type: Number },
    general_floor: { type: Number },
    area: { type: Number },
    live_area: { type: Number },
    appearance_id: { type: String },
    building_material_id: { type: String },
    summ: { type: Number },
    currency_id: { type: String },
    one_m_kv: { type: Number },
    announcement_number: { type: Number },
    announcement_type_id: { type: String },
    date: { type: Date }
});

module.exports = mongoose.model('announcement', AnnouncementSchema)