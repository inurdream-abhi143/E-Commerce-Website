import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./AdminNavbar.css";
import { RiAdminFill } from "react-icons/ri";
import { toast } from "react-toastify";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [login, setlogin] = useState(false);
  const logoutAdmin = (e) => {
    setlogin(true);
    if (!login) {
      toast.warn("Logout Failed");
    } else {
      navigate("/login");
      toast.success("Logout successfully");
    }
  };
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
            <Link className="a" to="products">
              Products
            </Link>
          </li>
          <li className=" adminnav-link">
            <Link className="a" to="orders">
              Orders
            </Link>
          </li>
          <li className=" adminnav-link">
            <Link className="a" to="customer">
              Customers
            </Link>
          </li>
          <li className=" adminnav-link">
            <Link className="a" to="stocks">
              Stocks
            </Link>
          </li>
          <li className=" adminnav-link">
            <Link className="a" to="tax">
              Tax Manage
            </Link>
          </li>
        </ul>
      </div>
      <div className="adminlog-out">
        <button onClick={logoutAdmin}>Logout</button>
      </div>
    </div>
  );
};

export default AdminNavbar;
