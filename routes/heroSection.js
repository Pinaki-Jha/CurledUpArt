// routes/heroSection.js
const express = require('express');
const router = express.Router();
const HeroSection = require('../models/heroSection'); // path to your schema

// GET all HeroSection data (assuming just one for now)
router.get('/', async (req, res) => {
  try {
    const data = await HeroSection.findOne(); // or findMany if multiple versions
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch hero section data.' });
  }
});

module.exports = router;
