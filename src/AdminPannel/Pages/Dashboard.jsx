import React from "react";
import "../Styles/Dashboard.css";
import RecentOrders from "../Components/RecentOrders/RecentOrders";
import SalesView from "../Components/SalesView/SalesView";
import { FcSalesPerformance } from "react-icons/fc";
import { RiListUnordered } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";

const Dashboard = () => {
  console.log("Dashboard Page Rendered");

  const OrderInfo = JSON.parse(localStorage.getItem("orderDetails"));
  // console.log("order details", OrderInfo);
  const totalOrders = OrderInfo.length||0;

  const sales = OrderInfo.map((order) => order.totals.totalAmount);

  const totalSales = sales.reduce((acc, val) => {
    return acc + val;
    // amount.toFix(2);
    // return amount;
  }, 0);

  return (
    <div className="dashboard">
      <h1 className="dashboard-name">Welcome Admin!</h1>
      <div className="dashboard-container">
        <div className="contaier1">
          <FcSalesPerformance className="icon" />
          <h1>Total Sales</h1>
          <p className="value">${totalSales}</p>
        </div>
        <div className="contaier1">
          <RiListUnordered className="icon" />
          <h1>Total Orders</h1>
          <p className="value">{totalOrders}</p>
        </div>

        <div className="contaier1">
          <FaUsers className="icon" />
          <h1>Total Customers</h1>
          <p className="value">{0}</p>
        </div>

        <div className="contaier1">
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
