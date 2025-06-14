// routes/about.js
const express = require('express');
const router = express.Router();
const AboutSection = require('../models/AboutSection');

// GET About Section
router.get('/', async (req, res) => {
  try {
    const about = await AboutSection.findOne(); // Assuming single document
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching About section' });
  }
});

module.exports = router;
