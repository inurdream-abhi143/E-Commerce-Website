import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Contexts/ShopContext'

import remove_icon from "../assets/cart_cross_icon.png"
import { Link } from 'react-router-dom'


const CartItems = () => {
    const {getTotalCartAmount,all_products, cartItems, removeFromCart } = useContext(ShopContext);



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
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
           <Link to='/shipping'> <button>PROCEED TO CHEKOUT</button></Link>
        </div>
      
        </div>
    </div>
   
  )
}

export default CartItems
