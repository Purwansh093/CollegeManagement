const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  subject: { type: String, required: true },
  marks: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Mark', markSchema);