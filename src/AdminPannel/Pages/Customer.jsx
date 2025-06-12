import React, { useState } from "react";
import CustomerHeader from "../Components/CustomerHeader/CustomerHeader";
import "../Styles/Customer.css";
import { toast } from "react-toastify";

function Customer() {
  // Only read from localStorage once, not on every render
  const [displayUsers, setDisplayUsers] = useState(
    () => JSON.parse(localStorage.getItem("signupInfo")) || []
  );

  // const [isBan, setIsBan] = useState(false);
  const [filterUsers, setFilterUsers] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const handleUserFilter = () => {
    const customers = JSON.parse(localStorage.getItem("signupInfo")) || [];
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

  // Pagination
  const itemPerPage = 5;
  const totalPages = Math.ceil(displayUsers.length / itemPerPage);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = displayUsers.slice(indexOfFirstItem, indexOfLastItem);

  const getPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const getNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Ban logic: just update userStatus, update localStorage and displayUsers
  const handleBan = (user) => {
    const customers = JSON.parse(localStorage.getItem("signupInfo")) || [];
    const updatedUsers = customers.map((u) =>
      u.email === user.email
        ? { ...u, userStatus: u.userStatus === "Banned" ? "Active" : "Banned" }
        : u
    );
    localStorage.setItem("signupInfo", JSON.stringify(updatedUsers));

    // Apply current filter to updated list
    const filterCustomers = updatedUsers.filter((u) => {
      const matchesNameOrEmail =
        u.name.toLowerCase() === filterUsers.toLowerCase() ||
        u.email.toLowerCase() === filterUsers.toLowerCase();
      const matchesStatus =
        filterStatus === "All" || u.userStatus === filterStatus;
      return matchesNameOrEmail && matchesStatus;
    });
    setDisplayUsers(
      filterCustomers.length > 0 ? filterCustomers : updatedUsers
    );

    toast.success(`${user.name} status changed 🚫`);
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
          handleBan={handleBan}
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
                      {user.userStatus === "Banned" ? "UnBan" : "Ban"}
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
