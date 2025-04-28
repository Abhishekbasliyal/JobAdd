const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  companyName: String,
  location: String,
  jobType: { type: String, enum: ['Full-time', 'Part-time', 'Contract', 'Internship'] },
  salaryMin: Number,
  salaryMax: Number,
  description: String,
  requirements: String,
  responsibilities: String,
  applicationDeadline: Date,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', jobSchema);
