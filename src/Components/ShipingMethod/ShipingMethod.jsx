import React, { useContext, useEffect, useReducer, useState } from "react";
import "./ShipingMethod.css";
import { ShippingReducer } from "../Reducer/ShippingReducer";
import { ShippingContext } from "../../Contexts/ShippingContext";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Contexts/ShopContext";

const ShipingMethod = () => {
  const [discountedAmount, setDiscountedAmount] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const { getTotalCartAmount } = useContext(ShopContext);

  const initilstate = {
    name: "",
    mobile_no: 0,
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: 0,
    shipping_method: "Standard",
  };

  const [state, dispatch] = useReducer(ShippingReducer, initilstate);
  // const[isdisable, setIsdisable] = useState(false)
  const { setShippingInfo } = useContext(ShippingContext);
  const navigate = useNavigate();

  // discount function here

  const discountCodes = {
    SUMMER10: { type: "percentage", value: 10 }, // 10% off
    FREEDOM50: { type: "flat", value: 50 }, // $50 off
    SPRING20: { type: "percentage", value: 20 }, // 20% off
    SAVE25: { type: "flat", value: 25 }, // $25 off
    WELCOME15: { type: "percentage", value: 15 }, // 15% off for newbies
    HOLIDAY100: { type: "flat", value: 100 }, // $100 off for the holidays
    FLASH5: { type: "flat", value: 5 }, // $5 off flash sale
    VIP30: { type: "percentage", value: 30 },
  };
  const addDiscount = (e) => {
    e.preventDefault();
    if (discountCodes[promoCode]) {
      if (discountCodes[promoCode].type === "percentage") {
        const price = getTotalCartAmount();
        const discount_price =
          price * (1 - discountCodes[promoCode].value / 100);
        const discountAmount = price - discount_price;
        alert(`You got ${discountCodes[promoCode].value}% off`);
        //  console.log("discountPrice",discount_price);
        setDiscountedAmount(discountAmount);
      } else if (discountCodes[promoCode].type === "flat") {
        const price = getTotalCartAmount();
        const discount_price = price - discountCodes[promoCode].value;
        const discountAmount = price - discount_price;
        alert(`You got $${discountCodes[promoCode].value} off`);
        // console.log("discounted_price",discount_price);
        setDiscountedAmount(discountAmount);
      } else {
        alert("Invalid Coupon Code");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mobileCheck = state.mobile_no.toString();
    const pincodeCheck = state.pincode.toString();

    const emailpattern = /^[\w.-]+@gmail\.com$/;
    const namepattern = /^[a-zA-Z\s]+$/;
    if (!emailpattern.test(state.email)) {
      alert("Email doesn't containe @gmail.com");
    } else if (!namepattern.test(state.name)) {
      alert("Remove special Character and Numbers");
    } else if (mobileCheck.length !== 10) {
      alert("invalid Mobile Number");
    } else if (
      state.address === "" &&
      state.city === "" &&
      state.state === "" &&
      state.country === ""
    ) {
      alert("Fill All the fields");
    } else if (pincodeCheck.length !== 6) {
      alert("enter valid pincode");
    }

    const userShippingInfo = {
      name: state.name,
      mobile: state.mobile_no,
      email: state.email,
      address: state.address,
      city: state.city,
      state: state.state,
      country: state.country,
      pincode: state.pincode,
      shipping_method: state.shipping_method,
      discount: discountedAmount,
    };

    if (
      emailpattern.test(state.email) &&
      namepattern.test(state.name) &&
      mobileCheck.length === 10 &&
      state.address !== "" &&
      state.city !== "" &&
      state.state !== "" &&
      state.country !== "" &&
      pincodeCheck.length === 6
    ) {
      setShippingInfo((prev) => ({ ...prev, ...userShippingInfo }));
      // setIsdisable(true);

      navigate("/payment");
      dispatch({ type: "Reset" });
      // setTimeout(() => dispatch({ type: "Reset" }), 0);
    }
  };
  return (
    <div className="Shiping-method">
      <form className="shiping-container" onSubmit={handleSubmit}>
        <div className="contact-info">
          <label className="label" htmlFor="full-name">
            Name
          </label>
          <input
            className="input-field"
            type="text"
            placeholder="Enter Your Name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "name", payload: e.target.value })
            }
          />
          <label className="label" htmlFor="contact">
            Mobile No
          </label>
          <input
            className="input-field"
            type="number"
            placeholder="Mobile Number"
            value={state.mobile_no}
            onChange={(e) =>
              dispatch({ type: "mobile", payload: e.target.value })
            }
          />
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input-field"
            type="email"
            placeholder="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
          />
        </div>

        <div className="address-info">
          <label className="label" htmlFor="address">
            Adreess
          </label>
          <input
            className="input-field"
            type="text"
            name="address"
            placeholder="House No,Street No,Landmark"
            value={state.address}
            onChange={(e) =>
              dispatch({ type: "address", payload: e.target.value })
            }
          />
          {/* <label className='label'  htmlFor='landmark'>Landmark</label>
            <input  className='input-field' name='landmark' type='text' placeholder='landmark'/> */}
          <label className="label" htmlFor="city">
            City
          </label>
          <input
            className="input-field"
            name="city"
            type="text"
            placeholder="City"
            value={state.city}
            onChange={(e) =>
              dispatch({ type: "city", payload: e.target.value })
            }
          />
          <label className="label" htmlFor="state">
            State
          </label>
          <input
            className="input-field"
            name="state"
            type="text"
            placeholder="state"
            value={state.state}
            onChange={(e) =>
              dispatch({ type: "state", payload: e.target.value })
            }
          />
          <label className="label" htmlFor="country">
            Country
          </label>
          <input
            className="input-field"
            name="country"
            type="text"
            placeholder="country"
            value={state.country}
            onChange={(e) =>
              dispatch({ type: "country", payload: e.target.value })
            }
          />

          <label className="label" htmlFor="pincode">
            Pin-Code
          </label>
          <input
            className="input-field"
            type="number"
            name="pincode"
            placeholder="Pincode"
            value={state.pincode}
            onChange={(e) =>
              dispatch({ type: "pincode", payload: e.target.value })
            }
          />
        </div>
        <div className="shiping-method">
          <label className="label" htmlFor="ship-method">
            Shipping Method
          </label>
          <select
            className="input-field"
            name="ship-method"
            value={state.shipping_method}
            onChange={(e) =>
              dispatch({ type: "shipping-method", payload: e.target.value })
            }
          >
            <option value="Standard">Standard</option>
            <option value="Express">Express</option>
            <option value="Same-Day">Same-Day</option>
          </select>
          {/* discount section here  */}

          <p className="label">If you have a promo code , Enter here</p>
          <div className="discount-field">
            <input
              type="text"
              placeholder="Promo Code"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value);
              }}
            />
            <button
              className="discount-btn"
              onClick={(e) => {
                addDiscount(e);
              }}
            >
              Submit
            </button>
          </div>
          <button type="submit" className="shipping-btn">
            PROCEED TO PAYMENT
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShipingMethod;
