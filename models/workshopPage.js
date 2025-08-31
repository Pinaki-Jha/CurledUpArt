const mongoose = require('mongoose');

const workshopSectionSchema = new mongoose.Schema({
  heading: String,
  description: String,
  order: {type:Number, default:10000},
  links: [String], // Array of Google Drive links
});

const WorkshopsPageSchema = new mongoose.Schema({
  sections: [workshopSectionSchema],
});

module.exports = mongoose.model('WorkshopsPage', WorkshopsPageSchema);
