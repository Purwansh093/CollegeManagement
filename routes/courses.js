const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST a new course
router.post('/', async (req, res) => {
  const { name, code, instructor, credits } = req.body;

  if (!name || !code || !instructor || !credits) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newCourse = new Course({ name, code, instructor, credits });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create course' });
  }
});

module.exports = router;
