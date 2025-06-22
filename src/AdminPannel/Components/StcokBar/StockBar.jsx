import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxReset } from "react-icons/rx";
import "../Maincss/header.css";

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
    <div className="header-bar">
      <div>
        <h2 className="header-bar__title">Stocks Management</h2>
      </div>
      <div className="header-bar__actions">
        <input
          className="header-bar__search-input"
          type="text"
          name="search-bar"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          placeholder="Search for Stocks by Category"
        />
        <button className="header-bar__btn" onClick={handleFilterStocks}>
          <CiSearch className="header-bar__icon" />
        </button>
        <button
          className="header-bar__btn header-bar__btn--reset"
          onClick={handleResetFilter}
        >
          <RxReset className="header-bar__icon" />
        </button>
      </div>
    </div>
  );
};
export default StockBar;
