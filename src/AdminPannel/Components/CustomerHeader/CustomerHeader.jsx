import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxReset } from "react-icons/rx";
import "./CustomerHeader.css";

const CustomerHeader = (props) => {
  const {
    filterUsers,
    setFilterUsers,
    handleUserFilter,
    filterStatus,
    setFilterStatus,
  } = props;

  const onUserFilter = () => {
    handleUserFilter();
    // console.log(typeof filterUsers);
  };
  const onFilterReset = () => {};
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
          value={filterUsers}
          onChange={(e) => {
            setFilterUsers(e.target.value);
          }}
        />
        <select
          name="status"
          value={filterStatus}
          onChange={(e) => {
            setFilterStatus(e.target.value);
          }}
          className="drop-filed"
        >
          <option value="All">All</option>
          <option value="Ban">Ban</option>
          <option value="Active">Active</option>
        </select>
        <button className="searchbtn" onClick={onUserFilter}>
          <CiSearch className="search" />
        </button>
        <button className="searchbtn" onClick={onFilterReset}>
          <RxReset className="search" />
        </button>
      </div>
    </div>
  );
};

export default CustomerHeader;
