import React, { useContext, useEffect, useMemo, useState } from "react";
import { ShippingContext } from "../../Contexts/ShippingContext";
import { ShopContext } from "../../Contexts/ShopContext";
import "./Payment.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PaymentContext } from "../../Contexts/PaymentContext";
import { toast } from "react-toastify";

const Payment = () => {
  const navigate = useNavigate();
  const [taxDetails, setTaxDetails] = useState([]);
  const { shippingInfo } = useContext(ShippingContext);
  const { setPaymentInfo } = useContext(PaymentContext);
  const { getTotalCartAmount, allProducts, cartItems } =
    useContext(ShopContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      payment: "credit-card",
      cardnumber: "",
      expiry: "",
      cvv: "",
      cardholdername: "",
    },
  });

  const paymentMode = watch("payment", "credit-card");

  const customerAddress = shippingInfo
    ? `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pincode}`
    : "";

  const customerPhone = shippingInfo?.mobile;
  const customerEmail = shippingInfo?.email;

  const getShippingMethod = (Method) => {
    switch (Method) {
      case "Standard":
        return 10;
      case "Express":
        return 20;
      case "Same-Day":
        return 30;
      default:
        return 0;
    }
  };

  const ShippingCost = getShippingMethod(shippingInfo?.shipping_method);
  // const TotalAmount =
  //   getTotalCartAmount() + ShippingCost - (shippingInfo?.discount || 0);

  const handleStocks = async () => {
    try {
      const updatedProducts = [];

      allProducts.forEach((Product) => {
        const orderQty = cartItems[Product.id];
        if (orderQty > 0) {
          const newStock = Product.stocks - orderQty;
          updatedProducts.push({
            id: Product.id,
            stocks: newStock < 0 ? 0 : newStock,
          });
        }
      });

      for (const product of updatedProducts) {
        await fetch(`http://localhost:4000/products/${product.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ stocks: product.stocks }),
        });
      }

      toast.success("Stocks updated successfully");
    } catch (error) {
      toast.error("Error updating stocks:", error);
      toast.warning("There was an issue updating the product stock.");
    }
  };

  const onSubmit = async (data) => {
    if (paymentMode === "credit-card" || paymentMode === "cash-on-delivery") {
      const date = new Date();
      const currentDate = date.toLocaleDateString();

      const paymentData = {
        paymentMode: data.payment,
        cardnumber: data.cardnumber,
        cardholdername: data.cardholdername,
        paymentDate: currentDate,
        shippingCost: ShippingCost,
        discount: shippingInfo?.discount || 0,
        TotalAmount: TotalAmount,
        taxBreakdown,
      };

      setPaymentInfo(paymentData);
      await handleStocks();
      navigate("/confirmorder");
    } else {
      toast.warn("Please select a payment method");
    }
  };

  useEffect(() => {
    fetch("http://localhost:4000/Taxes")
      .then((res) => res.json())
      .then((data) => setTaxDetails(data));
  }, []);

  // console.log(taxDetails);
  // get TaxProductInfo

  const getProductTaxInfo = (product) => {
    const origin = (product.origin || "").trim().toLowerCase();
    const match = taxDetails.find(
      (tax) => (tax.origin || "").trim().toLowerCase() === origin
    );

    const taxPercent = match ? Number(match.taxpercent) : 0;
    const taxName = match ? match.name : "No Tax";
    const qty = cartItems[product.id] || 0;
    const subtotal = Number(product.new_price) * qty;
    const taxAmount = (subtotal * taxPercent) / 100;

    // console.log(`"tax name", ${taxName} ,"taxpercent,${taxPercent}`);

    return {
      taxName,
      taxPercent,
      taxAmount,
      subtotal,
    };
  };

  const totalTaxAmount = useMemo(() => {
    let total = 0;
    allProducts.forEach((product) => {
      const qty = cartItems[product.id];
      if (qty > 0) {
        const { taxAmount } = getProductTaxInfo(product);
        total += taxAmount;
      }
    });
    return Number(total.toFixed(2));
  }, [cartItems, allProducts, taxDetails]);

  const cartSubTotal = useMemo(() => {
    let total = 0;
    allProducts.forEach((product) => {
      const qty = cartItems[product.id] || 0;
      total += Number(product.new_price) * qty;
    });
    return Number(total.toFixed(2));
  }, [cartItems, allProducts]);

  const TotalAmount = useMemo(() => {
    const shipping = ShippingCost || 0;
    const discount = Number(shippingInfo?.discount || 0);
    return Number(
      (cartSubTotal + totalTaxAmount + shipping - discount).toFixed(2)
    );
  }, [cartSubTotal, totalTaxAmount, ShippingCost, shippingInfo]);

  //  for sharing tax details

  const taxBreakdown = allProducts
    .filter((product) => cartItems[product.id] > 0)
    .map((product) => {
      const qty = cartItems[product.id];
      const { taxName, taxPercent, taxAmount, subtotal } =
        getProductTaxInfo(product);
      return {
        productId: product.id,
        productName: product.name,
        quantity: qty,
        price: product.new_price,
        subtotal: subtotal,
        taxName,
        taxPercent,
        taxAmount,
      };
    });

  return (
    <div className="payment">
      <div className="userinfo">
        <p>
          Name: <span>{shippingInfo?.name}</span>
        </p>
        <p>
          Address: <span>{customerAddress}</span>
        </p>
        <p>
          Mobile No: <span>{customerPhone}</span>
        </p>
        <p>
          Email: <span>{customerEmail}</span>
        </p>
        <p>
          Shipping Method: <span>{shippingInfo?.shipping_method}</span>
        </p>
      </div>

      <div className="product-info">
        <div className="shipping-format-main">
          <p>Title</p>
          <p>Product Quantity</p>
          <p>Price</p>
          <p>SubTotal</p>
          <p>Tax</p>
        </div>
        {allProducts.map((e) => {
          const qty = cartItems[e.id];
          if (qty > 0) {
            const { taxName, taxPercent, taxAmount, subtotal } =
              getProductTaxInfo(e);
            return (
              <div key={e.id}>
                <div className="shipping-format shipping-format-main">
                  <p className="product-name">{e.name}</p>
                  <p>{qty}</p>
                  <p>${Number(e.new_price).toFixed(2)}</p>
                  <p>${subtotal.toFixed(2)}</p>
                  <p>
                    {taxPercent > 0
                      ? `${taxName} (${taxPercent}%) = $${taxAmount.toFixed(2)}`
                      : "No Tax"}
                  </p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="price-info">
        <div className="price-info-total">
          <p>SubTotal</p>
          <h3>${getTotalCartAmount()}</h3>
        </div>
        <div className="price-info-total">
          <p>Shipping Fee</p>
          <h3>${ShippingCost}</h3>
        </div>
        <div className="price-info-total">
          <p>Discount</p>
          <h3>${shippingInfo?.discount || 0}</h3>
        </div>
        <hr className="hr" />
        <div className="price-info-total">
          <p>Total Amount</p>
          <h3>${TotalAmount || 0}</h3>
        </div>
      </div>

      <div className="product-paymment">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="paymentmode">
            <input
              type="radio"
              name="payment"
              id="credit-card"
              value="credit-card"
              {...register("payment", {
                required: "Please select a payment method",
              })}
            />
            <label className="paymentmethod" htmlFor="credit-card">
              Credit Card
            </label>
            <input
              type="radio"
              name="payment"
              id="cash-on-delivery"
              value="cash-on-delivery"
              {...register("payment", {
                required: "Please select a payment method",
              })}
            />
            <label className="paymentmethod" htmlFor="cash-on-delivery">
              Cash On Delivery
            </label>
          </div>

          {paymentMode === "credit-card" && (
            <div className="add-card-info">
              <div>
                <label className="card-name" htmlFor="cardnumber">
                  Card Number
                </label>
                <input
                  className={`card-number ${
                    errors.cardnumber ? "is-invalid" : ""
                  }`}
                  {...register("cardnumber", {
                    required: true,
                    pattern: {
                      value: /^\d{16}$/,
                      message: "Invalid Card Number",
                    },
                  })}
                  type="text"
                  id="cardnumber"
                  placeholder="Enter Card Number"
                />
                {errors.cardnumber && (
                  <div className="errorn">
                    {errors.cardnumber.type === "required"
                      ? "This field is required"
                      : errors.cardnumber.message}
                  </div>
                )}
              </div>

              <div className="card-info2">
                <label htmlFor="expiry" className="card-name">
                  Expiry Date
                </label>
                <input
                  className={`card-info2-e ${
                    errors.expiry ? "is-invalid" : ""
                  }`}
                  {...register("expiry", {
                    required: true,
                    pattern: {
                      value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                      message: "Invalid expiry date",
                    },
                  })}
                  type="text"
                  id="expiry"
                  placeholder="eg: 11/28"
                />
                {errors.expiry && (
                  <div className="error">
                    {errors.expiry.type === "required"
                      ? "This field is required"
                      : errors.expiry.message}
                  </div>
                )}

                <label htmlFor="cvv" className="card-name">
                  CVV
                </label>
                <input
                  className={`card-info2-e ${errors.cvv ? "is-invalid" : ""}`}
                  {...register("cvv", {
                    required: true,
                    pattern: { value: /^\d{3}$/, message: "Invalid CVV" },
                  })}
                  type="text"
                  id="cvv"
                  placeholder="CVV"
                />
                {errors.cvv && (
                  <div className="error">
                    {errors.cvv.type === "required"
                      ? "This field is required"
                      : errors.cvv.message}
                  </div>
                )}
              </div>

              <div>
                <label className="card-name" htmlFor="cardholdername">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className={`card-number ${
                    errors.cardholdername ? "is-invalid" : ""
                  }`}
                  {...register("cardholdername", {
                    required: true,
                    pattern: {
                      value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                      message: "Enter a valid name",
                    },
                  })}
                />
                {errors.cardholdername && (
                  <div className="error">
                    {errors.cardholdername.type === "required"
                      ? "This field is required"
                      : errors.cardholdername.message}
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="paybtn">
            <button type="submit" className="payment-button">
              {paymentMode === "credit-card" ? "Pay Now" : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
