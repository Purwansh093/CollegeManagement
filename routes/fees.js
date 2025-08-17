const express = require('express');
const router = express.Router();
const Fee = require('../models/Fee');

// Get all fees
router.get('/', async (req, res) => {
  const fees = await Fee.find().populate('studentId', 'name rollNo');
  res.json(fees);
});

// Add a fee
router.post('/', async (req, res) => {
  const { studentId, amount, status } = req.body;
  try {
    const fee = new Fee({ studentId, amount, status });
    await fee.save();
    res.json(fee);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;