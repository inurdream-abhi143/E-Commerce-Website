import React from "react";
import OrderBar from "../Components/OrderBar/OrderBar";
import "../Styles/Orders.css";

const Orders = () => {
  4;
  const OrderInfo = JSON.parse(localStorage.getItem("orderDetails")) || [];
  return (
    <div className="all_orders ">
      <OrderBar />
      <div className="orders-table-container">
        <table>
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Order Id</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {OrderInfo.map((orders, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{orders.orderId}</td>
                  <td>{orders.customer.name}</td>
                  <td>{orders.customer.email}</td>
                  <td>{orders.createdAt}</td>
                  <td>pending</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
