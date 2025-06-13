import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Contexts/ShopContext";

import remove_icon from "../assets/cart_cross_icon.png";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

const CartItems = () => {
  const {
    getTotalCartAmount,
    allProducts,
    cartItems,
    removeFromCart,
    addToCart,
    decreaseFromCart, // Make sure this exists in your context!
  } = useContext(ShopContext);

  const handleAdd = (product) => {
    if (cartItems[product.id] < product.stocks) {
      addToCart(product.id);
    } else {
      alert("Oops! Reached max stock.");
    }
  };

  const handleSub = (product) => {
    if (cartItems[product.id] > 1) {
      decreaseFromCart(product.id); // This should decrease by 1
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {allProducts.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={product.image}
                  alt=""
                  className="carticon-product-icon"
                />
                <p>{product.name}</p>
                <p>${product.new_price}</p>
                <div>
                  <button onClick={() => handleAdd(product)}>
                    <IoMdAdd />
                  </button>
                  <button className="cartitems-quantity">
                    {cartItems[product.id]}
                  </button>
                  <button onClick={() => handleSub(product)}>
                    <GrFormSubtract />
                  </button>
                </div>
                <p>${product.new_price * cartItems[product.id]}</p>
                <img
                  className="carticon-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(product.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to="/shipping">
            <button>PROCEED TO CHECKOUT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
