import React, { useContext } from "react";
import { PaymentContext } from "../../Contexts/PaymentContext";
import { ShippingContext } from "../../Contexts/ShippingContext";
import { ShopContext } from "../../Contexts/ShopContext";
import { saveOrderToLocalStorage } from "../../Utils/Storage";
import "./ConfirmOrder.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { v4 as uuidv4 } from "uuid";

const ConfirmOrder = () => {
  const { paymentInfo } = useContext(PaymentContext);
  const { getTotalCartAmount, allProducts, cartItems, clearCartItem } =
    useContext(ShopContext);
  const { shippingInfo } = useContext(ShippingContext);
  console.log("payment info-c", paymentInfo);

  const CardNumber = paymentInfo.cardnumber;
  // console.log("CardNumber", CardNumber);
  const maskCardNumber =
    paymentInfo.paymentMode === "credit-card"
      ? "*".repeat(CardNumber.length - 4) + CardNumber.slice(-4)
      : "";

  //   Total amount calculation
  // const totalAmount = paymentInfo.find((amount) => {
  //   return amount.totalAmount;
  // });
  // getTotalCartAmount() + paymentInfo.shippingCost - paymentInfo.discount;
  const customerPhone = shippingInfo.mobile;
  const customerEmail = shippingInfo.email;
  const customerAddress = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pincode}`;

  // console.log("totalAmount", totalAmount);

  // To Save order in local storage
  const navigate = useNavigate();

  const orderId = Math.floor(1000 + Math.random() * 9000);

  const handleSaveOrder = (e) => {
    e.preventDefault();
    const orderDetails = {
      orderId: orderId,
      customer: {
        name: shippingInfo.name,
        email: customerEmail,
        phone: customerPhone,
        address: customerAddress,
      },
      shippingInfo: {
        shippingMethod: shippingInfo.shipping_method,
        shippingCost: paymentInfo.shippingCost,
      },
      paymentInfo: {
        paymentMode: paymentInfo.paymentMode,
        ...(paymentInfo.paymentMode === "credit-card" && {
          cardNumber: paymentInfo.cardnumber,
        }),
        paymentDate: paymentInfo.paymentDate,
      },
      products: allProducts
        .filter((e) => cartItems[e.id] > 0)
        .map((e) => ({
          name: e.name,
          price: e.new_price,
          quantity: cartItems[e.id],
          subPrice: e.new_price * cartItems[e.id],
        })),
      totals: {
        subtotal: getTotalCartAmount(),
        discount: paymentInfo.discount || 0,
        shippingCost: paymentInfo.shippingCost || 0,
        totalAmount: paymentInfo.TotalAmount || 0,
      },
      createdAt: new Date().toLocaleString(),
    };
    saveOrderToLocalStorage(orderDetails);
    // Redirect to home page or perform any other action

    toast("Order Placed Successfully");
    clearCartItem();
    navigate("/");
  };
  return (
    <div className="confirmorder">
      <div className="Order-details">
        <h1>Order Details</h1>
        <div className="userinfo-C">
          <p>
            {" "}
            Name:<span>{shippingInfo.name}</span>
          </p>

          <p>
            Mobile No: <span>{customerPhone}</span>
          </p>
          <p>
            Email: <span>{customerEmail}</span>
          </p>
        </div>
        <div className="shippingdetails">
          <div>
            <p>
              {" "}
              Shipping Address:{" "}
              <span>{customerAddress ? customerAddress : ""}</span>
            </p>
          </div>
          <div>
            <p>
              Shipping Method: <span>{shippingInfo.shipping_method}</span>
            </p>
          </div>
          <p>
            Shipping Cost: <span>${paymentInfo.shippingCost || 0}</span>
          </p>
          <p>
            Payment Mode: <span>{paymentInfo.paymentMode}</span>
          </p>
          {paymentInfo.paymentMode === "credit-card" ? (
            <p>
              Card Number: <span>{maskCardNumber}</span>
            </p>
          ) : null}
          <p>
            Order Date: <span>{paymentInfo.paymentDate}</span>
          </p>
        </div>

        <div className="productdetails">
          <div className="producttable">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>SubPrice</th>
                </tr>
              </thead>
              <tbody>
                {allProducts.map((e) => {
                  if (cartItems[e.id] > 0) {
                    return (
                      <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{cartItems[e.id]}</td>
                        <td>${e.new_price}</td>
                        <td>${e.new_price * cartItems[e.id]}</td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
          <div className="pricesummary">
            <p>
              SubTotal: <span className="amount">${getTotalCartAmount()}</span>
            </p>

            <p>
              Shipping Cost:
              <span className="amount">${paymentInfo.shippingCost || 0}</span>
            </p>

            <p>
              Discount:
              <span className="amount">${paymentInfo.discount || 0}</span>
            </p>
            {paymentInfo.taxBreakdown &&
              paymentInfo.taxBreakdown.length > 0 &&
              paymentInfo.taxBreakdown.map((tax, idx) => (
                <p key={idx}>
                  Tax ({tax.taxName || "N/A"} - {tax.taxPercent || 0}%):
                  <span className="amount">
                    ${tax.taxAmount?.toFixed(2) || "0.00"}
                  </span>
                </p>
              ))}

            <hr />

            <p>
              Total Amount:
              <span className="amount">${paymentInfo.TotalAmount || 0}</span>
            </p>
          </div>
        </div>

        <button className="go-to-home" onClick={handleSaveOrder}>
          Go To Home
        </button>
        <Link to="/orderfail" className="order-failbtn1">
          <button className="order-failbtn">Order-Fail</button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmOrder;
