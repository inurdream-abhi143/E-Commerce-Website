import React from "react";
import "./RecentOrder.css";
const RecentOrders = () => {
  const OrderInfo = JSON.parse(localStorage.getItem("orderDetails"));
  return (
    <div className="recentorders">
      <table className="order-table">
        <caption>Recent Orders</caption>
        <thead className="order-head">
          <tr>
            <th>Order Id</th>
            <th>Customer Name</th>
            <th>Payment Method</th>
            <th>Order Date</th>
          </tr>
        </thead>
        <tbody>
          {OrderInfo?.slice(-5)
            .reverse()
            .map((order, i) => {
              return (
                <tr key={i}>
                  <td>{order.orderId}</td>
                  <td>{order.customer.name}</td>
                  <td>{order.paymentInfo.paymentMode}</td>
                  <td>{order.createdAt}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
