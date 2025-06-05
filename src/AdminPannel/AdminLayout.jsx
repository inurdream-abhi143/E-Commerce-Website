// AdminLayout.jsx
import React from "react";
import AdminNavbar from "./Components/AdminNavbar/AdminNavbar";
import { Outlet, useLocation } from "react-router-dom";

const AdminLayout = () => {
  console.log("AdminLayout Active");
  const location = useLocation();
  console.log("AdminLayout rendered at:", location.pathname);

  return (
    <div className="container-fluid" style={{ minHeight: "100vh" }}>
      <div className="row">
        <div className="col-2">
          <AdminNavbar />
        </div>
        <div className="col-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
