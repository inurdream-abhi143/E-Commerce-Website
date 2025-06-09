import React, { useContext, useState } from "react";
import "./AddProdcut.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ProductContext } from "../../../Contexts/ProductContext";
// import { MdDescription } from "react-icons/md";

const AddProduct = () => {
  const { allProducts, setAllProducts } = useContext(ProductContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      productName: "",
      productCategory: "men",
      productDescription: "",
      productPrice: "",
      productDiscountPrice: "",
      productStocks: "",
      productImage: "",
    },
  });

  const onSubmit = (data) => {
    const file = data.productImage[0];
    if (!file) {
      toast.warn("Please select the Product Image ");
      return;
    }
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result;
      const new_product = {
        id: allProducts.length + 1,
        name: data.productName,
        category: data.productCategory,
        image: base64Image,
        new_price: Number(data.productDiscountPrice),
        // description: data.productDescription,
        stocks: Number(data.productStocks),
        old_price: Number(data.productPrice),
      };

      // // console.log(data);
      // const updatedProduct = [...allProducts, new_product];
      // setAllProducts(updatedProduct);
      // toast.success("Product added successfully!");

      // reset();
      const newProduct = () => {
        fetch("http://localhost:4000/products", {
          method: "POST",
          headers: { "content-Type": "application/json" },
          body: JSON.stringify(new_product),
        })
          .then((res) => {
            if (!res.ok) throw new Error("failed to add Product ");
            return res.json();
          })
          .then((addedProduct) => {
            setAllProducts((prev) => [...prev, addedProduct]);
            toast.success("Product is Added");
            reset();
          })
          .catch((errors) => {
            toast.error("OOps! there is some errors while adding products");
            // console.error(errors);
          });
      };
      newProduct();
    };
    // console.log(allProducts);
    reader.readAsDataURL(file);
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
              <option value="men">Mens</option>
              <option value="women">Women</option>
              <option value="kid">Kids</option>
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
            <button
              type="button"
              className="reset-btn"
              onClick={() => {
                reset();
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
