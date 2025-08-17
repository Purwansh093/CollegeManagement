const express = require('express');
const router = express.Router();
const Mark = require('../models/Mark');

// Add a new mark
router.post('/', async (req, res) => {
  try {
    const mark = new Mark(req.body);
    await mark.save();
    res.json(mark);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all marks
router.get('/', async (req, res) => {
  try {
    const marks = await Mark.find().populate('studentId').populate('courseId');
    res.json(marks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
