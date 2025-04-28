// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/jobs');
require('dotenv').config({ path: 'C:/Users/abhis/Desktop/NodeProjects/cybermind/Admin_dash/server/.env' });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('MongoDB Connection Error:', err));

// Server startup
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
