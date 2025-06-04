import React from "react";
import CustomerHeader from "../Components/CustomerHeader/CustomerHeader";
import "../Styles/Customer.css";

function Customer() {
  const customers = JSON.parse(localStorage.getItem("signupInfo"));
  console.log(customers);
  return (
    <div className="customer-section">
      <div className="customer-header">
        <CustomerHeader />
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
            {customers.map((user, i) => {
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
    </div>
  );
}

export default Customer;
