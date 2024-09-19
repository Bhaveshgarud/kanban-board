import React, { useState } from "react";
import DisplayIcon from "../assets/Display.svg";
import DownArrowIcon from "../assets/down.svg";

const DisplayDropdown = ({ displayOptions, handleOptionChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
      <button
        className="dropdown-toggle"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <img src={DisplayIcon} alt="Display" className="icon display-icon" />
        <span>Display</span>
        <img src={DownArrowIcon} alt="Chevron" className="icon chevron-icon" />
      </button>
      {isDropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-section">
            <span className="dropdown-label">Grouping</span>
            <div className="select-wrapper">
              <select
                value={displayOptions.grouping}
                onChange={(e) => handleOptionChange("grouping", e.target.value)}
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
              <img src={DownArrowIcon} alt="Chevron" className="select-arrow" />
            </div>
          </div>
          <div className="dropdown-section">
            <span className="dropdown-label">Ordering</span>
            <div className="select-wrapper">
              <select
                value={displayOptions.ordering}
                onChange={(e) => handleOptionChange("ordering", e.target.value)}
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
              <img src={DownArrowIcon} alt="Chevron" className="select-arrow" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayDropdown;