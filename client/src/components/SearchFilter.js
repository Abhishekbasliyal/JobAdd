import React from "react";
import "./SearchFilter.css";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { Slider, Typography } from "@mui/material"; // ➔ Import MUI components

function SearchFilter({ filters, setFilters, onSearch }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSalaryChange = (e, newValue) => {
    setFilters((prev) => ({
      ...prev,
      salaryMin: newValue[0],
      salaryMax: newValue[1],
    }));
  };

  return (
    <div className="search-filter">
      <div className="sf-input">
        <FiSearch className="sf-icon" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          name="title"
          value={filters.title}
          onChange={handleChange}
        />
      </div>

      <div className="sf-select">
        <GoLocation className="sf-icon" />
        <select name="location" value={filters.location} onChange={handleChange}>
          <option value="">Preferred Location</option>
          <option value="Remote">Remote</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="London">London</option>
        </select>
      </div>

      <div className="sf-select">
        <select name="jobType" value={filters.jobType} onChange={handleChange}>
          <option value="">Job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="sf-salary" style={{ marginTop: "20px" }}>
        <Typography gutterBottom>Salary Range (₹ per month)</Typography>
        <Slider
          getAriaLabel={() => "Salary range"}
          value={[
            filters.salaryMin !== "" ? filters.salaryMin : 50000,
            filters.salaryMax !== "" ? filters.salaryMax : 800000,
          ]}
          onChange={handleSalaryChange}
          valueLabelDisplay="auto"
          min={50000}
          max={800000}
          step={10000}
        />
      </div>

      <button className="sf-search-btn" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchFilter;
