import React from "react";
import "../Styles/Dashboard.css";
import RecentOrders from "../Components/RecentOrders/RecentOrders";
import SalesView from "../Components/SalesView/SalesView";
import { FcSalesPerformance } from "react-icons/fc";
import { RiListUnordered } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  console.log("Dashboard Page Rendered");

  const OrderInfo = JSON.parse(localStorage.getItem("orderDetails")) || [];
  const cutomers = JSON.parse(localStorage.getItem("signupInfo")) || [];

  const totalCustomers = cutomers.length;
  // console.log(totalCustomers);
  // console.log("order details", OrderInfo);
  const totalOrders = OrderInfo.length;

  const sales = OrderInfo.map((order) => order.totals.totalAmount);

  const totalSales = sales.reduce((acc, val) => {
    return acc + val;
    // amount.toFix(2);
    // return amount;
  }, 0);
  const navigate = useNavigate();

  const orderView = () => {
    navigate("/admin/orders");
  };
  const customerView = () => {
    navigate("/admin/customer");
  };
  const stocksView = () => {
    navigate("/admin/stocks");
  };
  return (
    <div className="dashboard">
      <h1 className="dashboard-name">Welcome Admin!</h1>
      <div className="dashboard-container">
        <div className="dashboard-contaier1">
          <FcSalesPerformance className="icon" />
          <h1>Total Sales</h1>
          <p className="value">${totalSales}</p>
        </div>

        {/* <Link to="orders" className="list-style"> */}
        <div className="dashboard-contaier1" onClick={orderView}>
          <RiListUnordered className="icon" />
          <h1>Total Orders</h1>
          <p className="value">{totalOrders}</p>
        </div>
        {/* </Link> */}

        <div className="dashboard-contaier1" onClick={customerView}>
          <FaUsers className="icon" />
          <h1>Total Customers</h1>
          <p className="value">{totalCustomers}</p>
        </div>

        <div className="dashboard-contaier1" onClick={stocksView}>
          <GoAlertFill className="icon-alert" />
          <h1>Low Stocks Alert</h1>
          <p className="value">{0}</p>
        </div>
      </div>
      <div className="container-2">
        <div className="container-2-section1">
          <RecentOrders />
        </div>
        <div className="container-2-section2">
          <SalesView totalSales={totalSales} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
