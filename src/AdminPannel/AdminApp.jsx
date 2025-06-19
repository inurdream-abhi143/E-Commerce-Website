// AdminApp.jsx
import { Route, Routes } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import Dashboard from "./Pages/Dashboard";
import Orders from "./Pages/Orders";
import Stocks from "./Pages/Stocks";
import AdminProduct from "./Pages/AdminProduct";
import Customer from "./Pages/Customer";
import TaxImplement from "./Pages/TaxImplement"; // Ensure this is the correct import path

const AdminApp = () => {
  console.log("AdminApp Rendered");
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<AdminProduct />} />
          {/* Add more routes as needed */}
          <Route path="orders" element={<Orders />} />
          <Route path="stocks" element={<Stocks />} />
          <Route path="customer" element={<Customer />} />
          <Route path="Tax" element={<TaxImplement />} />
        </Route>

        {/* Optional: catch-all route for unknown admin paths */}
        <Route path="*" element={<div>Admin Page Not Found</div>} />
      </Routes>
    </>
  );
};

export default AdminApp;
