const mongoose = require('mongoose');

const markSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  marksObtained: { type: Number, required: true },
  totalMarks: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Mark', markSchema);