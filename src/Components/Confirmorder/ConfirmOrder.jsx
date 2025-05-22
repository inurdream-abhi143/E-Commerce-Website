import React, { useContext } from "react";
import { PaymentContext } from "../../Contexts/PaymentContext";
import { ShippingContext } from "../../Contexts/ShippingContext";
import { ShopContext } from "../../Contexts/ShopContext";
import { get } from "react-hook-form";
import "./ConfirmOrder.css";

const ConfirmOrder = () => {
  const { paymentInfo } = useContext(PaymentContext);
  const { getTotalCartAmount, all_products, cartItems } =
    useContext(ShopContext);
  const { shippingInfo } = useContext(ShippingContext);
  console.log("payment info-c", paymentInfo);
  const CardNumber = paymentInfo.cardnumber;
  console.log("CardNumber", CardNumber);
  const maskCardNumber =
    "*".repeat(CardNumber.length - 4) + CardNumber.slice(-4);
  //   Total amount calculation
  const totalAmount =
    getTotalCartAmount() + paymentInfo.shippingCost - paymentInfo.discount;
  const customerPhone = shippingInfo.mobile;
  const customerEmail = shippingInfo.email;
  const customerAddress = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pincode}`;

  console.log("totalAmount", totalAmount);
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
            {" "}
            Address: <span>{customerAddress ? customerAddress : ""}</span>
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
              card Number: <span>{paymentInfo.cardnumber}</span>
            </p>
          ) : null}
          <p>
            Order Date: <span>{paymentInfo.paymentDate}</span>
          </p>
        </div>

        <p>
          Card Number: <span>{maskCardNumber}</span>
        </p>
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
                {all_products.map((e) => {
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
              Shipping Cost:{" "}
              <span className="amount">${paymentInfo.shippingCost || 0}</span>
            </p>

            <p>
              Discount:{" "}
              <span className="amount">${paymentInfo.discount || 0}</span>
            </p>

            <hr />

            <p>
              Total Amount: <span className="amount">${totalAmount || 0}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
