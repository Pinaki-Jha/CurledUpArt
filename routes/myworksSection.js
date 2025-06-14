// routes/myWorks.js
const express = require('express');
const router = express.Router();
const MyWorksSection = require('../models/myworksSection');

// Get MyWorksSection
router.get('/', async (req, res) => {
  try {
    const data = await MyWorksSection.findOne(); // assuming only one document
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching My Works section' });
  }
});

module.exports = router;
