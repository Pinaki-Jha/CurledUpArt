// routes/map.js
const express = require('express');
const router = express.Router();
const Map = require('../models/mapSection');

router.get('/', async (req, res) => {
  try {
    const mapData = await Map.findOne(); 
    res.json(mapData);
    console.log('hit')
    console.log(mapData)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch map data.' });
  }
});

module.exports = router;
