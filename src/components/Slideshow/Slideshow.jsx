import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Slide.css";

const HomeDropdown = () => {
  return (
    <div className="home-dropdown">
      <div className="home-icon">
        <FontAwesomeIcon icon={faHome} size="2x" />
      </div>
      <div className="dropdown-content">
        <div className="dropdown-item">
          <div className="dropdown-header">Header 1</div>
          <div className="dropdown-body">This is the body for item 1.</div>
        </div>
        <div className="dropdown-item">
          <div className="dropdown-header">Header 2</div>
          <div className="dropdown-body">This is the body for item 2.</div>
        </div>
        <div className="dropdown-item">
          <div className="dropdown-header">Header 3</div>
          <div className="dropdown-body">This is the body for item 3.</div>
        </div>
        <div className="dropdown-item">
          <div className="dropdown-header">Header 4</div>
          <div className="dropdown-body">This is the body for item 4.</div>
        </div>
        <div className="dropdown-item">
          <div className="dropdown-header">Header 5</div>
          <div className="dropdown-body">This is the body for item 5.</div>
        </div>
      </div>
    </div>
  );
};

export default HomeDropdown;
