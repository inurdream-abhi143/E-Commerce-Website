import React from "react";
import { CiSearch } from "react-icons/ci";
import "./OrderBar.css";

const OrderBar = ({ searchValue, onSearchChange, onSearch }) => (
  <div className="order-bar">
    <div className="order-section1">
      <h2>Order Management</h2>
    </div>
    <div className="order-section2">
      <input
        className="search-bar"
        type="text"
        value={searchValue}
        onChange={onSearchChange}
        placeholder="Search Orders by Customer Name"
      />
      <button className="searchbtn" onClick={onSearch}>
        <CiSearch className="search" />
      </button>
    </div>
  </div>
);

export default OrderBar;
