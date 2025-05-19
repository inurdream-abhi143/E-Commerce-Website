import React, { useContext, useState } from 'react'
import { ShippingContext } from '../../Contexts/ShippingContext'
import { ShopContext } from '../../Contexts/ShopContext'
import "./Payment.css";

const Payment = () => {

  const [paymentMode , setPaymentMode ] = useState("credit-card")
  const [paymentDone , setPaymentDone] = useState(false)
    const{shippingInfo} =useContext(ShippingContext)
  const {getTotalCartAmount,all_products, cartItems, } = useContext(ShopContext);

  console.log("payment mode",paymentMode);
  console.log("discount", shippingInfo.discount);
    // console.log("my data", shippingInfo);

    const customerAddress = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pincode}`;
    const customerPhone = shippingInfo.mobile;
    const customerEmail = shippingInfo.email;

    const getShippingMethod =(Method)=>{
      switch(Method){
        case "Standard":
          return  10;
          case "Express":
          return  20;
          case "Same-Day":
          return  30;
          default:
          return  0;
      }
    }
const TotalAmount = getTotalCartAmount() + getShippingMethod(shippingInfo.shipping_method)- shippingInfo.discount;


  return (
    <div className='payment'>
        <div className="userinfo">
            <p> Name:<span>{shippingInfo.name}</span></p>
            <p> Address: <span>{customerAddress}</span></p>
            <p>Mobile No: <span>{customerPhone}</span></p>
            <p>Email: <span>{customerEmail}</span></p>
            <p>Shipping Method: <span>{shippingInfo.shipping_method}</span></p>
        </div>
        {/* the products displays css  comes from cartItem  */}
      <div className="product-info">
         <div className="shipping-format-main">
        <p>Title</p>
        <p>Product Quantity</p>
        <p>Price</p>
        <p>SubTotal</p>
       
      </div>
        {
          all_products.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div key={e.id}>
                <div className="shipping-format shipping-format-main">
                    {/* <img src={e.image} alt='' className='carticon-product-icon'/> */}
                    <p className='product-name'>{e.name}</p>
                     <p>{cartItems[e.id]}</p>
                    <p>${e.new_price}</p>
                    <>{e.new_price* cartItems[e.id]}</>
                </div>
                </div>
            }
          })
        }
        
      </div>
      {/* product ends here  */}
     
<div className="price-info">
        <div className="price-info-total">
         <p>SubTotal</p>
          <h3>${getTotalCartAmount()}</h3>
          </div>
           <div className="price-info-total">
        <p>Shipping Fee</p>
         <h3>${getShippingMethod(shippingInfo.shipping_method)}</h3>
         </div>
         <div className="price-info-total">
        <p>Discount</p>
         <h3>${shippingInfo.discount?shippingInfo.discount:0}</h3>
        </div>
         <hr  className='hr'/>
        <div className="price-info-total">
        <p>Total Amount </p>
        <h3>${TotalAmount?TotalAmount:0}</h3>
        </div>
       
</div>
 {/* <button className='payment-button'>Pay Now</button> */}
  <div className="product-paymment">
   <form>
      < div className="paymentmode">
        <input type='radio' name='payment' value="credit-card" onChange={(e)=>{setPaymentMode(e.target.value)}}/>
        <label htmlFor='credit-card'>Credit Card</label>
        <input type='radio' name='payment' value="cash-on-delivery" onChange={(e)=>{setPaymentMode(e.target.value)}} />
        <label htmlFor='debit-card'>Cash On Delivery</label>
      </div>
      {paymentMode ==="credit-card"? (
        <div className="add-card-info">
        <div>
        <label className='card-name' htmlFor='card-number'>Card Number</label>
        <input className='card-number' type='text' name='card-number' placeholder='Enter Card Number'/>
        </div>
        <div className='card-info2'>
        <label  htmlFor='expiry-date' className='card-name'>Expiry Date   </label>
        <input className='card-info2-e' type='text' name='expiry-date' />   
        <label htmlFor='cvv' className='card-name'>CVV </label>
        <input className='card-info2-e' type='number' name='cvv' placeholder='CVV'/>      
         </div>
        <div>
        <label className='card-name' htmlFor='cardholder-name'>Card Holder Name</label>
        <input className='card-number' type='text' name='cardholder-nanem' placeholder='Card Holder Name'/>      
        </div>
      </div>):null
      }
       
      <div className="paybtn">
        <button className='payment-button' >Pay Now</button>
      </div>
 </form>
    </div>
  </div>
)
}
export default Payment
