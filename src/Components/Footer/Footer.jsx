import React from 'react'
import "./Footer.css"
import footer_logo from "../../assets/logo_big.png"
import instagram_icon from "../../assets/instagram_icon.png"
// import printester_icon from "../../assets/printester_icon.png"
import whatsapp_icon from "../../assets/whatsapp_icon.png"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
       <Link className="footer-link" to='/'>  <img  src={footer_logo} alt=''/>
        <p>SHOPPER</p>
         </Link> 
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className='footer-icons-container'>
           <img src={instagram_icon} alt='' />
        </div>
        {/* <div className='footer-icons-container'>
            <img src={printester_icon} alt='' />
        </div> */}
        <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt='' />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p> &#xA9; Copyright @2023- All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
