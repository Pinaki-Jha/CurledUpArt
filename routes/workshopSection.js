const express = require('express');
const router = express.Router();
const WorkshopsSection = require('../models/workshopSection');

// GET workshops data
router.get('/', async (req, res) => {
  try {
    const workshops = await WorkshopsSection.findOne(); 
    res.json(workshops);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workshops section' });
  }
});

module.exports = router;
