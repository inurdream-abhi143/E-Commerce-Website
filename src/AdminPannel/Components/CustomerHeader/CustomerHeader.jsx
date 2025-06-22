import React from "react";
import { CiSearch } from "react-icons/ci";
import { RxReset } from "react-icons/rx";
// import "./CustomerHeader.css";
import "../Maincss/header.css";

const CustomerHeader = (props) => {
  const {
    filterUsers,
    setFilterUsers,
    handleUserFilter,
    filterStatus,
    setFilterStatus,
    handleBan,
  } = props;

  const onUserFilter = () => {
    handleUserFilter();
    handleBan();
    // console.log(typeof filterUsers);
  };
  const onFilterReset = () => {};
  return (
    <div className="header-bar">
      <div>
        <h2 className="header-bar__title">Customer Management</h2>
      </div>
      <div className="header-bar__actions">
        <input
          className="header-bar__search-input"
          type="text"
          name="search-bar"
          placeholder="Search for customer by Name or Email"
          value={filterUsers}
          onChange={(e) => setFilterUsers(e.target.value)}
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="header-bar__select"
        >
          <option value="All">All</option>
          <option value="Banned">Banned</option>
          <option value="Active">Active</option>
        </select>
        <button className="header-bar__btn" onClick={onUserFilter}>
          <CiSearch className="header-bar__icon" />
        </button>
        <button
          className="header-bar__btn header-bar__btn--reset"
          onClick={onFilterReset}
        >
          <RxReset className="header-bar__icon" />
        </button>
      </div>
    </div>
  );
};

export default CustomerHeader;
