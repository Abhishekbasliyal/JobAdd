
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import SearchFilter from "../components/SearchFilter";
import JobCard from "../components/JobCard";
import "./JobsPage.css";

function JobsPage() {
  const location = useLocation();
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    jobType: "",
    salaryMin: 50000,
    salaryMax: 80000,
  });
  const [loading, setLoading] = useState(false);

  const fetchJobs = async (applyFilters = false) => {
    setLoading(true);
    try {
      const params = {};

      if (applyFilters) {
        if (filters.title) params.title = filters.title;
        if (filters.location) params.location = filters.location;
        if (filters.jobType) params.jobType = filters.jobType;
        if (filters.salaryMin) params.salaryMin = filters.salaryMin;
        if (filters.salaryMax) params.salaryMax = filters.salaryMax;
      }

      console.log("Fetching jobs with params:", params);
      const res = await axios.get("http://localhost:5000/api/jobs", { params });
      console.log("API Response:", res.data);
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
      alert("Error loading jobs.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs(false); 
  }, [location]);

  return (
    <div className="jobs-page">
      <SearchFilter
        filters={filters}
        setFilters={setFilters}
        onSearch={() => fetchJobs(true)} 
      />
      <div className="jobs-grid">
        {loading ? (
          <div className="jobs-loading">Loading jobs...</div>
        ) : jobs.length === 0 ? (
          <div className="jobs-empty">No jobs found.</div>
        ) : (
          jobs.map((job) => <JobCard key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
}

export default JobsPage;
