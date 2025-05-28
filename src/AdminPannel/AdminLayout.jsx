// AdminLayout.jsx
import React from "react";
import AdminNavbar from "./Components/AdminNavbar/AdminNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "220px", backgroundColor: "#f4f4f4" }}>
        <AdminNavbar />
      </div>
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
