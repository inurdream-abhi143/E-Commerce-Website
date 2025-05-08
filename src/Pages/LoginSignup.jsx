import React from 'react'
import "./CSS/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div>
      <form className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type='text' placeholder='Your Name' />
            <input type='email' placeholder='Enter your email'/>
            <input type='password' placeholder='Enter Password' />
          </div>
          <button>Continue</button>
          <p className='loginsignup-login' >Already have an Account <span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing i agree to the term of use & privacy ploicy.</p>
          </div>
        </div>
        
         
      </form>
    </div>
  )
}

export default LoginSignup
