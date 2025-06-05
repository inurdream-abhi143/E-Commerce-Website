import React from "react";
import { CiSearch } from "react-icons/ci";
import "./StockBar.css";

const StockBar = () => {
  return (
    <div className="stock-bar">
      <div className="customer-section1">
        <h2>Stocks Management</h2>
      </div>
      <div className="customer-section2">
        <input
          className="search-bar"
          type="text"
          name="search-bar"
          placeholder="Search for Stocks by Status"
        />
        <button className="searchbtn">
          <CiSearch className="search" />
        </button>
      </div>
    </div>
  );
};

export default StockBar;
