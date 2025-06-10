import React, { useState } from "react";
import CustomerHeader from "../Components/CustomerHeader/CustomerHeader";
import "../Styles/Customer.css";

function Customer() {
  // for filtering feature
  const [filterUsers, setFilterUsers] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleUserFilter = () => {};
  // pagination functions
  const [currentPage, setCurrentPage] = useState(1);
  const customers = JSON.parse(localStorage.getItem("signupInfo"));
  // console.log(customers);
  const itemPerPage = 5;
  const totalPages = Math.ceil(customers.length / itemPerPage);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

  const getPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const getNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <div className="customer-section">
      <div className="customer-header">
        <CustomerHeader
          filterUsers={filterUsers}
          setFilterUsers={setFilterUsers}
          handleUserFilter={handleUserFilter}
        />
      </div>
      <div className="customer-info">
        <table className="customer-table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>password</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>Active</td>
                  <td className="actionbtns">
                    <button className="viewbtn">View</button>
                    <button className="editbtn">Edit</button>
                    <button className="banbtn">Ban</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="admin-pagination">
        <button className="pagebtn" onClick={getPrevPage}>
          PREV
        </button>
        <p className="admin-items-per-page">{`${currentPage}-${totalPages} of total ${customers.length} customer's`}</p>
        <button className="pagebtn" onClick={getNextPage}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Customer;
