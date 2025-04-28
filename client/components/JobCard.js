import React from "react";
import "./JobCard.css";
import amazonLogo from "../assets/amazon.png";
import teslaLogo from "../assets/tesla.png";
import uiLogo from "../assets/ui-logo.jpeg";

function JobCard({ job }) {
  let logo = amazonLogo;
  if (job.title && job.title.toLowerCase().includes("tesla")) logo = teslaLogo;
  if (job.title && job.title.toLowerCase().includes("ux")) logo = uiLogo;
  if (job.title && job.title.toLowerCase().includes("ui")) logo = uiLogo;

  return (
    <div className="job-card">
      <div className="job-badge">24h Ago</div>
      <div className="job-card-row">
        <div className="job-card-logo">
          <img src={logo} alt="company" />
        </div>
        <div className="job-card-details">
          <div className="job-card-title">{job.title}</div>
          <div className="job-card-meta">
            <span>1-3 yr Exp</span>
            <span>Onsite</span>
            <span>{job.salaryMax ? `${Math.round(job.salaryMax/100000)}LPA` : "12LPA"}</span>
          </div>
          <ul className="job-card-desc">
            <li>A user friendly interface lets you browse stunning photos and videos</li>
            <li>Filter destinations based on interests and travel style, and create personalized</li>
          </ul>
          <button className="job-card-apply">Apply Now</button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
