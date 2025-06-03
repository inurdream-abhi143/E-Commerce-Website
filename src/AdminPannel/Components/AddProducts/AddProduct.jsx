import React, { useState } from "react";
import "./AddProdcut.css";
import all_product from "../../../Components/assets/all_product";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [product, setProduct] = useState([]);
  let AllProducts = [];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: "",
      productCategory: "Mens",
      productDescription: "",
      productPrice: "",
      productDiscountPrice: "",
      productStocks: "",
      productImage: "",
    },
  });

  const onSubmit = (data) => {
    const new_product = {
      id: all_product.length + 1,
      name: data.productName,
      category: data.productCategory,
      image: data.productImage,
      new_price: data.productDiscountPrice,
      old_price: data.productPrice,
    };
    setProduct(new_product);
    // console.log(data);
    AllProducts = [...all_product, product];
    console.log(AllProducts);
  };
  return (
    <div className="addproducts">
      <div className="addproducts-form">
        <h1>Add Products</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="addproducts-formgrid"
        >
          <div className="formgrid-group">
            <label htmlFor="productName" className="product-label">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter The Name of products"
              className={`product-field ${
                errors.productName ? "is-invalid" : ""
              }`}
              {...register("productName", { required: true })}
            />
            {errors.productName && (
              <div className="error">This field is required</div>
            )}
          </div>

          <div className="formgrid-group">
            <label htmlFor="productCategory" className="product-label">
              Category
            </label>
            <select
              name="productCategory"
              placeholder="Select Category"
              className={`product-field ${
                errors.productCategory ? "is-invalid" : ""
              }`}
              {...register("productCategory", { required: true })}
            >
              <option value="Mens">Mens</option>
              <option value="Womens">Women</option>
              <option value="Kids">Kids</option>
            </select>
            {errors.productCategory && (
              <div className="error">This Field is Required</div>
            )}
          </div>

          <div className="formgrid-group">
            <label htmlFor="productDescription" className="product-label">
              Description
            </label>
            <input
              type="text"
              name="productDescription"
              placeholder="Description of product"
              className={`product-field ${
                errors.productDescription ? "is-invalid" : ""
              }`}
              {...register("productDescription", { required: true })}
            />
            {errors.productDescription && (
              <div className="error">This Field is Required</div>
            )}
          </div>

          <div className="formgrid-group">
            <label htmlFor="productprice" className="product-label">
              Price
            </label>
            <input
              type="text"
              name="productPrice"
              className={`product-field ${
                errors.productPrice ? "is-invalid" : ""
              }`}
              {...register("productPrice", { required: true })}
            />
            {errors.productPrice && (
              <div className="error">This Field is Required</div>
            )}
          </div>

          <div className="formgrid-group">
            <label className="product-label" htmlFor="productDiscountPrice">
              Discount Price
            </label>
            <input
              type="text"
              name="productDiscountPrice"
              className={`product-field ${
                errors.productDiscountPrice ? "is-invalid" : ""
              }`}
              {...register("productDiscountPrice", { required: true })}
            />
            {errors.productDiscountPrice && (
              <div className="error">This Field is Required</div>
            )}
          </div>

          <div className="formgrid-group">
            <label className="product-label" htmlFor="productStocks">
              Stocks
            </label>
            <input
              type="text"
              name="productStocks"
              className={`product-field ${
                errors.productStocks ? "is-invalid" : ""
              }`}
              {...register("productStocks", { required: true })}
            />
            {errors.productStocks && (
              <div className="error">This Field is Required</div>
            )}
          </div>

          <div className="formgrid-group">
            <label className="product-label" htmlFor="productImage">
              Product Image
            </label>
            <input
              type="file"
              name="productImage"
              style={{ padding: "8px 0" }}
              className={`product-field ${
                errors.productImage ? "is-invalid" : ""
              }`}
              {...register("productImage", { required: true })}
            />
            {errors.productImage && (
              <div className="error">This Field is Required</div>
            )}
          </div>

          <div className="formgrid-group-btn" style={{ marginTop: "20px" }}>
            <input type="submit" className="submit-btn" />
            <input type="reset" className="reset-btn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
