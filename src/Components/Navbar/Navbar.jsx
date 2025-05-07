import React, { useState } from "react";
import "./Navbar.css";
import logo from '../../assets/logo.png';

import cart_icon from "../../assets/Cart_icon.png";
import { Link } from "react-router-dom";
const Navbar =()=>{
  const[menu , setMenu] =  useState("shop");


    return(<>
    <div className="Navbar">
            <div className="nav-logo">
                <Link to='/' className="link"><img src={logo} alt="logo" /></Link>
                <p className="logo-name">SHOPPER</p>
            
            </div>
        <div className="nav-menu">
            <ul>
                <li onClick ={()=>{setMenu("shop")}} > <Link className="link" to="/">Shop</Link>  {menu==="shop"?<hr className="bottom-line"/>:<></>} </li>
                <li onClick ={()=>{setMenu("mens")}}> <Link className="link" to="/mens">Men</Link>    {menu==="mens"?<hr className="bottom-line"/>:<></>} </li>
                <li onClick ={()=>{setMenu("womens")}}><Link className="link" to="/womens">Women</Link>{menu==="womens"?<hr className="bottom-line"/>:<></>}  </li>
                <li onClick ={()=>{setMenu("kids")}}> <Link className="link" to="/kids">Kid</Link>    {menu==="kids"?<hr className="bottom-line"/>:<></>}     </li>
            </ul>  
        </div>

        <div className="nav-login-cart">
            <Link className="link" to='/login'><button className="btn ">Login</button></Link> 
            <Link className="link" to='/cart'> <img src={cart_icon} alt=""/></Link> 
                <div className="nav-cart-count">0</div>
        </div>
    </div>
    </>)
}


export default Navbar;