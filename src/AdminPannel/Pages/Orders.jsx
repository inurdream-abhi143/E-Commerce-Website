import React, { useEffect, useState } from "react";
import OrderBar from "../Components/OrderBar/OrderBar";
import "../Styles/Orders.css";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterOrder, setFilterOrder] = useState([]);
  const OrderInfo = JSON.parse(localStorage.getItem("orderDetails")) || [];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filterOrder.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filterOrder.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setFilterOrder(OrderInfo);
  }, []);
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

  // for Order filtering by status

  const onSearchOrder = () => {
    const filtered = OrderInfo.filter(
      (order) => order.customer.name === filterStatus
    );
    setFilterOrder(filtered.length > 0 ? filtered : OrderInfo);
    setCurrentPage(1);
  };

  const clearFilter = () => {
    setFilterStatus("");
    setFilterOrder(OrderInfo);
    setCurrentPage(1);
  };
  return (
    <div className="all_orders ">
      <OrderBar
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        clearFilter={clearFilter}
        onSearchOrder={onSearchOrder}
      />
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
                  <td>{indexOfFirstItem + 1}</td>
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
          {`${currentPage}-${totalPages} of total ${filterOrder.length} Orders`}
        </p>
        <button className="pagebtn" onClick={getNextPage}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Orders;
