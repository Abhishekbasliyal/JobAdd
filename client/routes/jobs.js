const express = require('express');
const Job = require('../models/Job');
const router = express.Router();

// Get jobs with filters
router.get('/', async (req, res) => {
  const { title, location, jobType, salaryMin, salaryMax } = req.query;
  const filter = {};
  if (title) filter.title = new RegExp(title, 'i');
  if (location) filter.location = new RegExp(location, 'i');
  if (jobType) filter.jobType = jobType;
  if (salaryMin) filter.salaryMin = { $gte: Number(salaryMin) };
  if (salaryMax) filter.salaryMax = { $lte: Number(salaryMax) };
  const jobs = await Job.find(filter);
  res.json(jobs);
});

// Add new job
router.post('/', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
});

module.exports = router;
