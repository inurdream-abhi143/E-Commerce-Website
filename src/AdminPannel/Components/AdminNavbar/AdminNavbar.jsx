import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./AdminNavbar.css";
import { RiAdminFill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const navLinks = [
  { path: "dashboard", label: "Dashboard" },
  { path: "products", label: "Products" },
  { path: "orders", label: "Orders" },
  { path: "customer", label: "Customers" },
  { path: "stocks", label: "Stocks" },
  { path: "tax", label: "Tax Manage" },
];

const AdminNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [login, setlogin] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logoutAdmin = (e) => {
    setlogin(true);
    if (!login) {
      toast.warn("Logout Failed");
    } else {
      navigate("/login");
      toast.success("Logout successfully");
    }
  };

  // Close sidebar when a link is clicked (on mobile)
  const handleNavLinkClick = () => {
    if (window.innerWidth <= 900) setSidebarOpen(false);
  };

  // Overlay click closes sidebar
  const handleOverlayClick = () => setSidebarOpen(false);

  // Show bar icon only on mobile/tablet
  const showToggle = window.innerWidth <= 900;

  return (
    <>
      <button
        className="adminnavbar__toggle"
        onClick={() => setSidebarOpen((o) => !o)}
        aria-label={sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
        style={{ display: showToggle ? "flex" : "none" }}
      >
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`adminnavbar${sidebarOpen ? " open" : ""}`}
        tabIndex={-1}
        role="navigation"
      >
        <div className="admin-logo">
          <RiAdminFill className="admin-icon" />
          <h2>Admin</h2>
        </div>
        <div className="adminnav-menu">
          <ul>
            {navLinks.map((link) => (
              <li className="adminnav-link" key={link.path}>
                <Link
                  className={`a${
                    location.pathname.includes(link.path) ? " active" : ""
                  }`}
                  to={link.path}
                  onClick={handleNavLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="adminlog-out">
          <button onClick={logoutAdmin}>Logout</button>
        </div>
      </div>
      {/* Overlay for mobile sidebar */}
      <div
        className={`adminnavbar__overlay${sidebarOpen ? " open" : ""}`}
        onClick={handleOverlayClick}
      ></div>
    </>
  );
};

export default AdminNavbar;
