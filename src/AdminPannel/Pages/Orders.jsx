import React from "react";

const Orders = () => {
  4;
  const OrderInfo = JSON.parse(localStorage.getItem("orderDetails")) || [];
  return (
    <div className="container mx-4 d-flex ">
      <table className="table table-responsive table-striped table-hover table-bordered">
        <thead className="table-dark">
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
  );
};

export default Orders;
