import React, { useState } from "react";
import OrderBar from "../Components/OrderBar/OrderBar";
import "../Styles/Orders.css";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const OrderInfo = JSON.parse(localStorage.getItem("orderDetails")) || [];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(OrderInfo.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = OrderInfo.slice(indexOfFirstItem, indexOfLastItem);
  const getNextPage = () => {
    // currentPage < totalPages ? setCurrentPage(currentPage + 1) : currentPage;
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const getPrevPage = () => {
    // currentPage > 1 ? setCurrentPage(currentPage - 1) : currentPage;
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
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
            {currentItems.map((orders, i) => {
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
      {/* Pagination starts  */}
      <div className="admin-pagination">
        <button className="pagebtn" onClick={getPrevPage}>
          PREV
        </button>
        <p className="admin-items-per-page">
          {`${currentPage}-${totalPages} of total ${OrderInfo.length} Orders`}
        </p>
        <button className="pagebtn" onClick={getNextPage}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Orders;
