// routes/contact.js
const express = require('express');
const router = express.Router();
const ContactSection = require('../models/contactSection');

router.get('/', async (req, res) => {
  try {
    const contact = await ContactSection.findOne(); // assuming one entry
    if (!contact) return res.status(404).json({ message: 'Contact info not found' });
    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
