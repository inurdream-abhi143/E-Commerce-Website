import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxReset } from "react-icons/rx";
import "./StockBar.css";

const StockBar = (props) => {
  const {
    handleFilterStocks,
    setFilterCategory,
    filterCategory,
    handleResetFilter,
  } = props;

  const handleFilter = () => {
    handleFilterStocks();
  };
  const resetFilter = () => {
    handleResetFilter();
  };
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
          value={filterCategory}
          onChange={(e) => {
            setFilterCategory(e.target.value);
          }}
          placeholder="Search for Stocks by Status"
        />
        <button className="searchbtn" onClick={handleFilter}>
          <CiSearch className="search" />
        </button>
        <button className="searchbtn" onClick={resetFilter}>
          <RxReset className="search" />
        </button>
      </div>
    </div>
  );
};

export default StockBar;
