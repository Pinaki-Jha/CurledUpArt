const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const heroSectionRoutes = require('./routes/heroSection');
const aboutSectionRoutes = require('./routes/aboutSection');
const myworksSectionRoutes = require('./routes/myworksSection');
const worksPagesRoutes = require('./routes/workspages');
const contactSectionRoutes = require('./routes/contactSection');
const workshopSectionRoutes = require('./routes/workshopSection');
const workshopPageRoutes = require('./routes/workshopPage');
const reviewSectionRoutes = require('./routes/reviewSection');
const mapSectionRoutes = require('./routes/mapSection');

const path = require('path');




const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));




app.use('/api/herosec', heroSectionRoutes);
app.use('/api/aboutsec', aboutSectionRoutes);
app.use('/api/myworkssec', myworksSectionRoutes);
app.use('/api/workspage', worksPagesRoutes);
app.use('/api/contactsec',contactSectionRoutes);
app.use('/api/workshopsec',workshopSectionRoutes)
app.use('/api/workshoppage',workshopPageRoutes);
app.use('/api/reviewsec',reviewSectionRoutes);
app.use('/api/mapsec',mapSectionRoutes);


app.get('/*splat', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8001;


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));
