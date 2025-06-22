import React from "react";
import { CiSearch } from "react-icons/ci";
// import "./OrderBar.css";
import "../Maincss/header.css";
const OrderBar = ({ searchValue, onSearchChange, onSearch }) => (
  <div className="header-bar">
    <div>
      <h2 className="header-bar__title">Order Management</h2>
    </div>
    <div className="header-bar__actions">
      <input
        className="header-bar__search-input"
        type="text"
        value={searchValue}
        onChange={onSearchChange}
        placeholder="Search Orders by Customer Name"
      />
      <button className="header-bar__btn" onClick={onSearch}>
        <CiSearch className="header-bar__icon" />
      </button>
    </div>
  </div>
);

export default OrderBar;
