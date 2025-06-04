import React from "react";
import { CiSearch } from "react-icons/ci";
import "./CustomerHeader.css";

const CustomerHeader = () => {
  return (
    <div className="customerheader">
      <div className="customer-section1">
        <h2>Customer Management</h2>
      </div>
      <div className="customer-section2">
        <input
          className="search-bar"
          type="text"
          name="search-bar"
          placeholder="Search for customer by Status"
        />
        <button className="searchbtn">
          <CiSearch className="search" />
        </button>
      </div>
    </div>
  );
};

export default CustomerHeader;
