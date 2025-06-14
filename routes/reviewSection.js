const express = require('express');
const router = express.Router();
const reviewSection = require('../models/reviewSection');

router.get('/', async (req, res) => {
  try {
    const section = await reviewSection.findOne(); // Assuming one document
    //console.log(page)
    res.json(section);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews data.' });
  }
});

module.exports = router;
