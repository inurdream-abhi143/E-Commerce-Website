import React from "react";
import { Link } from "react-router-dom";
import "./AdminNavbar.css";
import { RiAdminFill } from "react-icons/ri";

const AdminNavbar = () => {
  return (
    <div className="adminnavbar">
      <div className="admin-logo">
        <RiAdminFill className="admin-icon" />
        <h2>Admin</h2>
      </div>
      <div className="adminnav-menu">
        <ul>
          <li className="adminnav-link">
            <Link className="a" to="dashboard">
              Dashboard
            </Link>
          </li>
          <li className=" adminnav-link">
            <Link className="a" to="/products">
              Products
            </Link>
          </li>
          <li className=" adminnav-link">
            <Link className="a" to="/orders">
              Orders
            </Link>
          </li>
          <li className=" adminnav-link">
            <Link className="a" to="/customers">
              Customers
            </Link>
          </li>
          <li className=" adminnav-link">
            <Link className="a" to="/stocks">
              Stocks
            </Link>
          </li>
        </ul>
      </div>
      <div className="adminlog-out">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default AdminNavbar;
