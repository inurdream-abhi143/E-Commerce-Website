import React, { useState } from "react";
import CustomerHeader from "../Components/CustomerHeader/CustomerHeader";
import "../Styles/Customer.css";
import { toast } from "react-toastify";

function Customer() {
  // getting data from localStorage
  const customers = JSON.parse(localStorage.getItem("signupInfo"));
  // console.log("user Dettails", customers);
  // for filtering feature
  const [filterUsers, setFilterUsers] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [displayUsers, setDisplayUsers] = useState(customers || []);

  const handleUserFilter = () => {
    const filterCustomers = customers.filter((user) => {
      const matchesNameOrEmail =
        user.name.toLowerCase() === filterUsers.toLowerCase() ||
        user.email.toLowerCase() === filterUsers.toLowerCase();

      const matchesStatus =
        filterStatus === "All" || user.userStatus === filterStatus;

      return matchesNameOrEmail && matchesStatus;
    });
    setDisplayUsers(filterCustomers.length > 0 ? filterCustomers : customers);
    setCurrentPage(1);
  };

  // pagination functions
  const [currentPage, setCurrentPage] = useState(1);

  // console.log(customers);
  const itemPerPage = 5;
  const totalPages = Math.ceil(displayUsers.length / itemPerPage);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = displayUsers.slice(indexOfFirstItem, indexOfLastItem);

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
  const handleBan = (user) => {
    console.log("user key", user);
  };
  return (
    <div className="customer-section">
      <div className="customer-header">
        <CustomerHeader
          filterUsers={filterUsers}
          setFilterUsers={setFilterUsers}
          handleUserFilter={handleUserFilter}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
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
                  <td>{user.userStatus}</td>
                  <td className="actionbtns">
                    <button className="viewbtn">View</button>
                    <button className="editbtn">Edit</button>
                    <button className="banbtn" onClick={() => handleBan(user)}>
                      Ban
                    </button>
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
        <p className="admin-items-per-page">{`${currentPage}-${totalPages} of total ${displayUsers.length} customer's`}</p>
        <button className="pagebtn" onClick={getNextPage}>
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Customer;
