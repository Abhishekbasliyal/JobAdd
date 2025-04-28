import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateJobPage.css";

function CreateJobPage() {
  const navigate = useNavigate();
  const [job, setJob] = useState({
    title: "",
    companyName: "",
    location: "",
    jobType: "Full-time",
    salaryMin: "",
    salaryMax: "",
    applicationDeadline: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://jobadd.onrender.com/api/jobs", {    
        ...job,
        salaryMin: job.salaryMin ? Number(job.salaryMin) : undefined,
        salaryMax: job.salaryMax ? Number(job.salaryMax) : undefined,
      });
      navigate("/");
    } catch (err) {
        if (err.response && err.response.data) {
          alert("Error: " + JSON.stringify(err.response.data));
        } else {
          alert("Network error or server is down");
        }
      }
      

    setLoading(false);
  };

  return (
    <div className="createjob-overlay">
      <div className="createjob-modal">
        <h2>Create Job Opening</h2>
        <form onSubmit={handleSubmit}>
          <div className="createjob-row">
            <div className="createjob-field">
              <label>Job Title</label>
              <input
                type="text"
                name="title"
                value={job.title}
                onChange={handleChange}
                placeholder="Full Stack Developer"
                required
              />
            </div>
            <div className="createjob-field">
              <label>Company Name</label>
              <input
                type="text"
                name="companyName"
                value={job.companyName}
                onChange={handleChange}
                placeholder="Amazon, Microsoft, Swiggy"
                required
              />
            </div>
          </div>
          <div className="createjob-row">
            <div className="createjob-field">
              <label>Location</label>
              <select
                name="location"
                value={job.location}
                onChange={handleChange}
                required
              >
                <option value="">Choose Preferred Location</option>
                <option value="Remote">Remote</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="London">London</option>
              </select>
            </div>
            <div className="createjob-field">
              <label>Job Type</label>
              <select
                name="jobType"
                value={job.jobType}
                onChange={handleChange}
                required
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>
          <div className="createjob-row">
            <div className="createjob-field">
              <label>Salary Range</label>
              <div className="createjob-salary">
                <input
                  type="number"
                  name="salaryMin"
                  value={job.salaryMin}
                  onChange={handleChange}
                  placeholder="₹ TO"
                  min="0"
                />
                <input
                  type="number"
                  name="salaryMax"
                  value={job.salaryMax}
                  onChange={handleChange}
                  placeholder="₹ 12,00,000"
                  min="0"
                />
              </div>
            </div>
            <div className="createjob-field">
              <label>Application Deadline</label>
              <input
                type="date"
                name="applicationDeadline"
                value={job.applicationDeadline}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="createjob-field">
            <label>Job Description</label>
            <textarea
              name="description"
              value={job.description}
              onChange={handleChange}
              rows={4}
              placeholder="Please type a description to let the candidate know more about the job role"
              required
            />
          </div>
          <div className="createjob-actions">
            <button type="button" className="createjob-draft" disabled>
              Save Draft
            </button>
            <button type="submit" className="createjob-publish" disabled={loading}>
              {loading ? "Publishing..." : "Publish »"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateJobPage;
