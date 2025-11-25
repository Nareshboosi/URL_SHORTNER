const mongoose = require("mongoose");

const LinkSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortCode: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Link", LinkSchema);
