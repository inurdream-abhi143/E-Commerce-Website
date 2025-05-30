import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AdminLayout from "./AdminLayout";
import Product from "../Pages/Product";

const AdminApp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
        </Route>
        {/* Add more routes as needed */}
        {/* <Route path="/orders" element={<Orders />} /> */}
        {/* <Route path="/users" element={<Users />} /> */}
      </Routes>
    </div>
  );
};

export default AdminApp;
