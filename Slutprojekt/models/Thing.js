const mongoose = require("mongoose");

const thingSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String },
    password: { type: String },
    alive: { type: Boolean },
    owners: [{  type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Thing', thingSchema);