const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Sample route
app.get("/", (req, res) => {
    res.send("College Management System API");
});

const marksRoutes = require('./routes/marks');
app.use('/api/marks', marksRoutes);

const courseRoutes = require('./routes/courses');
app.use('/api/courses', courseRoutes);


const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error("MongoDB connection error:", err));

const markRoutes = require('./routes/marks');
app.use('/api/marks', markRoutes);

const feeRoutes = require('./routes/fees');
app.use('/api/fees', feeRoutes);

import './App.css';

const studentRoutes = require('./routes/students');
app.use('/api/students', studentRoutes);

// const courseRoutes = require('./routes/courses');
// app.use('/api/courses', courseRoutes);