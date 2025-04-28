import React from "react";
import "./SearchFilter.css";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

function SearchFilter({ filters, setFilters, onSearch }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSlider = (e) => {
    setFilters((prev) => ({
      ...prev,
      salaryMin: e.target.value[0],
      salaryMax: e.target.value[1],
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
      <div className="sf-salary">
        <span>Salary Per Month</span>
        <div className="sf-salary-range">
          <span>₹50k</span>
          <input
            type="range"
            min="50000"
            max="800000"
            step="10000"
            value={filters.salaryMin}
            name="salaryMin"
            onChange={handleChange}
            style={{ margin: "0 8px" }}
          />
          <span>₹80k</span>
        </div>
      </div>
      <button className="sf-search-btn" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchFilter;
