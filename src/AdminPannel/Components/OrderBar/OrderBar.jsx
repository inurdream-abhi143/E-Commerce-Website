import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxReset } from "react-icons/rx";
// import "./OrderBar.css";
import "../Maincss/header.css";
const OrderBar = ({
  setFilterStatus,
  filterStatus,
  clearFilter,
  onSearchOrder,
}) => {
  const handleSearch = () => {
    onSearchOrder();
    // clearFilter();
  };
  const handleReset = () => {
    clearFilter();
  };
  return (
    <>
      <div className="header-bar">
        <div>
          <h2 className="header-bar__title">Order Management</h2>
        </div>
        <div className="header-bar__actions">
          <input
            className="header-bar__search-input"
            type="text"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            placeholder="Search Orders by Customer Name"
          />
          <button className="header-bar__btn" onClick={handleSearch}>
            <CiSearch className="header-bar__icon" />
          </button>
          <button className="header-bar__btn" onClick={handleReset}>
            <RxReset className="header-bar__icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderBar;
