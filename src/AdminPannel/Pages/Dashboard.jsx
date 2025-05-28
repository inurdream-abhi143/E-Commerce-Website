import React from "react";
import "../Styles/Dashboard.css";
import RecentOrders from "../Components/RecentOrders/RecentOrders";
import SalesView from "../Components/SalesView/SalesView";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-name">Welcome Admin</h1>
      <div className="dashboard-container">
        <div className="contaier1">
          <h1>Total Sales</h1>
          <p className="value">${0}</p>
        </div>
        <div className="contaier1">
          <h1>Total Orders</h1>
          <p className="value">{0}</p>
        </div>

        <div className="contaier1">
          <h1>Total Customers</h1>
          <p className="value">{0}</p>
        </div>

        <div className="contaier1">
          <h1>Low Stocks Alert</h1>
          <p className="value">{0}</p>
        </div>
      </div>
      <div className="container-2">
        <div className="container-2-section1">
          <RecentOrders />
        </div>
        <div className="container-2-section2">
          <SalesView />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
