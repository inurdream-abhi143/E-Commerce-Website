import React, { useContext, useState } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Contexts/ShopContext'
import remove_icon from "../../assets/cart_cross_icon.png"
import { Link } from 'react-router-dom'


const CartItems = () => {
    const {getTotalCartAmount,all_products, cartItems, removeFromCart } = useContext(ShopContext);
    const [promoCode, setPromoCode] = useState("");
    const [discountedTotal, setDiscountedTotal] = useState(0);



const discountCodes ={
   SUMMER10: { type: "percentage", value: 10 },      // 10% off
  FREEDOM50: { type: "flat", value: 50 },           // $50 off
  SPRING20: { type: "percentage", value: 20 },      // 20% off
  SAVE25: { type: "flat", value: 25 },              // $25 off
  WELCOME15: { type: "percentage", value: 15 },     // 15% off for newbies
  HOLIDAY100: { type: "flat", value: 100 },         // $100 off for the holidays
  FLASH5: { type: "flat", value: 5 },                // $5 off flash sale
  VIP30: { type: "percentage", value: 30 }, 

};
const addDiscount =(e)=>{
 e.preventDefault();
     if(discountCodes[promoCode]){
      if(discountCodes[promoCode].type ==="percentage"){
    const price = getTotalCartAmount();
      const discount_price = price * (1-discountCodes[promoCode].value/100);
      //  console.log("discountPrice",discount_price);
      setDiscountedTotal(discount_price);
  }else if(discountCodes[promoCode].type ==="flat"){
        const price = getTotalCartAmount();
        const discount_price = price- discountCodes[promoCode].value
        console.log("discounted_price",discount_price);
         setDiscountedTotal(discount_price);
        
      }else{
        alert("Invalid Coupon Code");
      }
    }}
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_products.map((e)=>{
        if(cartItems[e.id]>0)
        {
            return <div key={e.id}>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt='' className='carticon-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img className='carticon-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='' />
    
            </div>
            <hr />
          </div>
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
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                 <div className="cartitems-total-item">
                    <p>Discount</p>
                    <p>${discountedTotal?getTotalCartAmount()-discountedTotal:0}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${discountedTotal?discountedTotal:getTotalCartAmount()}</h3>
                </div>
            </div>
           <Link to='/shipping'> <button>PROCEED TO CHEKOUT</button></Link>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code , Enter here</p>
            <div className="cartitems-promobox">
                <input type='text'  placeholder='Promo Code' 
                value={promoCode}
                onChange={(e)=>{setPromoCode(e.target.value)}}/>
                <button onClick={(e)=>{addDiscount(e)}}>Submit</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CartItems
