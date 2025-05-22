import React from "react";
import "./OrderFail.css";
import { useNavigate } from "react-router-dom";

const OrderFail = () => {
  const navigate = useNavigate();
  const navigateHomeButton = () => {
    navigate("/");
  };
  const navigateCartButton = () => {
    navigate("/cart");
  };

  return (
    <>
      <div className="container">
        <div className="order-fail">
          <h1>Oops! Your order didn’t go through.</h1>
          <h2>We’re sorry for the inconvenience.</h2>
          <h3>Please try again later.</h3>
          <div className="order-btns">
            <button className="order-fail-button" onClick={navigateHomeButton}>
              Go To Home
            </button>
            <button className="order-fail-button" onClick={navigateCartButton}>
              Go To Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderFail;
