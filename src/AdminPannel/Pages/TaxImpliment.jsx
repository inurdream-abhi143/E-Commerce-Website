import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../Styles/TaxImpliment.css";
import { toast } from "react-toastify";

const TaxImpliment = () => {
  const [taxList, setTaxList] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      tax_for: "Domestic",
    },
  });

  // const handleTax = (data) => {
  //   const tax = {
  //     name: data.taxType,
  //     taxpercent: data.taxPercent,
  //   };
  //   // console.log(" Tax Added:", tax);
  //   reset(); // Optional: Clear form after submission
  // };
  useEffect(() => {
    // TaxList();
    getTaxList();
  }, []);

  const TaxList = () => {
    fetch("http://localhost:4000/Taxes")
      .then((res) => res.json())
      .then((data) => setTaxList(data));
  };
  const handleTax = (data) => {
    const tax = {
      name: data.taxType,
      taxpercent: parseFloat(data.taxPercent),
      origin: data.tax_for,
    };

    NewTaxList(tax); // send it to server
    reset();
  };

  const NewTaxList = (tax) => {
    fetch("http://localhost:4000/Taxes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // ✅ spelling fix
      },
      body: JSON.stringify(tax), // ✅ actually send the object
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to Add Taxes");
        return res.json();
      })
      .then((data) => {
        toast.success(`✅ Tax "${tax.name}" added!`);

        TaxList(); // refresh list
      })
      .catch((err) => {
        toast.error("❌ Error:", err.message);
      });
  };

  const getTaxList = () => {
    fetch("http://localhost:4000/Taxes")
      .then((res) => res.json())
      .then((data) => setTaxList(data));
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(handleTax)} className="tax-form">
        <h1>Tax Management</h1>
        <div className="taxform-field">
          <label htmlFor="taxType">Tax Name</label>
          <input
            type="text"
            {...register("taxType", { required: "Tax Name is required" })}
            placeholder="Enter Type of Tax"
            className="taxInput-field"
          />
          {errors.taxType && <p className="error">{errors.taxType.message}</p>}

          <label htmlFor="taxPercent">{`Tax Amount (%)`}</label>
          <input
            type="number"
            step="0.01"
            {...register("taxPercent", {
              required: "Tax percentage is required",
              min: { value: 0, message: "Can't be negative" },
              max: { value: 100, message: "Max is 100%" },
            })}
            placeholder="Enter Tax Percentage"
          />
          {errors.taxPercent && (
            <p className="error">{errors.taxPercent.message}</p>
          )}
          <label htmlFor="tax_for">Tax For</label>
          <select
            className="taxInput-field"
            {...register("tax_for", { required: "Tax Origin Required" })}
            placeholder="Tax for Origin "
          >
            <option>Domestic</option>
            <option>International</option>
          </select>
          {errors.tax_for && <p className="error">{errors.tax_for.message}</p>}

          <button type="submit" className="taxBtn">
            Add Tax
          </button>
        </div>
      </form>
      <div className="Tax-list">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Tax Name</th>
              <th>Tax Type</th>
              <th>Tax for Origin</th>
            </tr>
          </thead>
          <tbody>
            {taxList.map((tax) => {
              return (
                <tr>
                  <td>{tax.id}</td>
                  <td>{tax.name}</td>
                  <td>{tax.taxpercent}</td>
                  <td>{tax.origin}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxImpliment;
