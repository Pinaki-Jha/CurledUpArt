// routes/worksPage.js
const express = require('express');
const router = express.Router();
const WorksPageSection = require('../models/worksPage');

// Get all WorksPageSections
router.get('/mainpage', async (req, res) => {
  try {
    const data = await WorksPageSection.find() .select('heading mainImage description').sort({ createdAt: 1 }); // optional sort
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch works sections' });
  }
});


//get one worksection
router.get('/:formattedHeading', async (req, res) => {
  const formattedHeading = req.params.formattedHeading.toLowerCase().trim();

  try {
    const work = await WorksPageSection.findOne().where('heading').regex(new RegExp(`^${formattedHeading}$`, 'i'));

    if (!work) {
      return res.status(404).json({ message: 'Work not found' });
    }

    res.status(200).json(work);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

module.exports = router;
