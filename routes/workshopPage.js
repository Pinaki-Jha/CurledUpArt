const express = require('express');
const router = express.Router();
const WorkshopsPage = require('../models/workshopPage');


router.get('/', async (req, res) => {
  try {
    const page = await WorkshopsPage.findOne(); // Assuming one document
    //console.log(page)
    
    res.json(page);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch workshops data.' });
  }
});

module.exports = router;
