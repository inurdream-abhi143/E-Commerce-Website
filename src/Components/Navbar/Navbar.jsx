import React from "react";
import "./Navbar.css";
import logo from '../../assets/logo.png';

import cart_icon from "../../assets/Cart_icon.png";
const Navbar =()=>{


    return(<>
    <div className="Navbar">
<div className="nav-logo">
    <img src={logo} alt="logo" />
    <p className="logo-name">SHOPPER</p>
</div>
<div className="nav-menu">

    <ul>
    <li>Shop <hr className="bottom-line"/></li>
    <li>Men</li>
    <li>Women</li>
    <li>Kid</li>
    </ul>  
</div>
<div className="nav-login-cart">
    <button className="btn ">Login</button>
    <img src={cart_icon} alt=""/>
    <div className="nav-cart-count">0</div>
</div>
    </div>
    </>)
}


export default Navbar;