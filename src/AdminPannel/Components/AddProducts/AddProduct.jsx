import React from "react";

import all_product from "../../../Components/assets/all_product";

const AddProduct = () => {
  const AllProducts = [...all_product];

  return (
    <div className="addproducts">
      <form className="addproducts-form">
        <h1>Add Prodcuts</h1>
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter The Name of products"
          value={""}
          onChange={""}
        />
        <label htmlFor="Category">Category</label>
        <select name="category" placeholder="Select Category">
          <option value="Mens">Mens</option>
          <option value="Womens">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </form>
    </div>
  );
};

export default AddProduct;
