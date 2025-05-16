import React, { useContext, useReducer, useState } from 'react'
import "./ShipingMethod.css"
import{ShippingReducer}from "../Reducer/ShippingReducer";
import { ShippingContext } from '../../Contexts/ShippingContext';

const ShipingMethod = () => {
  const initilstate = {
    name: "",
    mobile_no : 0,
    email : "",
    address :"",
    city: "",
    state:"",
    country:"",
    pincode: 0,
    shipping_method: "Standard"


  };

  const[state, dispatch] = useReducer(ShippingReducer, initilstate);
  // const[isdisable, setIsdisable] = useState(false)
  const{ setShippingInfo}=useContext(ShippingContext);

  const handleSubmit =(e)=>{

    e.preventDefault();
    const mobileCheck = state.mobile_no.toString();
      const pincodeCheck = state.pincode.toString();
   
    const emailpattern  = /^[\w.-]+@gmail\.com$/;
    const namepattern = /^[a-zA-Z\s]+$/;
    if(!emailpattern.test(state.email)){
      alert("Email doesn't containe @gmail.com")
    }else if(!namepattern.test(state.name)){
      alert("Remove special Character and Numbers")
    }else if(mobileCheck.length !==10){
      alert("invalid Mobile Number")
    }else if(state.address ===""&&state.city===""&& state.state ==="" && state.country=== ""){
      alert("Fill All the fields")
    }else if(pincodeCheck.length !==6){
      alert("enter valid pincode")
    }
   
   if (
  emailpattern.test(state.email) &&
  namepattern.test(state.name) &&
  mobileCheck.length === 10 &&
  state.address !== "" &&
  state.city !== "" &&
  state.state !== "" &&
  state.country !== "" &&
  pincodeCheck.length === 6
) {
    setShippingInfo((prev)=>({...prev , ...state}));
  setIsdisable(true);
  // dispatch({ type: "Reset" });
    // setTimeout(() => dispatch({ type: "Reset" }), 0);
}

  }
  return (
    <div className='Shiping-method'>
    <form className='shiping-container' onSubmit={handleSubmit}> 

            <div className='contact-info'>
            <label className='label' htmlFor='full-name'>Name</label>
            <input className='input-field' type='text' placeholder='Enter Your Name' value={state.name} onChange={(e)=>dispatch({ type:"name", payload:e.target.value})} />
            <label className='label' htmlFor='contact'>Mobile No</label>
            <input  className='input-field' type='number' placeholder='Mobile Number' value={state.mobile_no} onChange={(e)=>dispatch({type:"mobile", payload:e.target.value})}/>
            <label className='label'  htmlFor='email'>Email</label>
            <input  className='input-field' type='email' placeholder='email'value={state.email} onChange={(e)=>dispatch({type:"email", payload:e.target.value})}  />
            </div>
            
          <div className='address-info'>

          <label className='label'  htmlFor='address'>Adreess</label>
          <input  className='input-field' type='text' name='address'  placeholder='House No,Street No,Landmark' value={state.address} onChange={(e)=>dispatch({type:"address", payload:e.target.value})}/>
          {/* <label className='label'  htmlFor='landmark'>Landmark</label>
            <input  className='input-field' name='landmark' type='text' placeholder='landmark'/> */}
            <label className='label'  htmlFor='city'>City</label>
            <input  className='input-field' name='city' type='text' placeholder='City' value={state.city} onChange={(e)=>dispatch({type:"city",payload:e.target.value})}/>
            <label className='label'  htmlFor='state'>State</label>
            <input  className='input-field' name='state' type='text' placeholder='state' value={state.state} onChange={(e)=>dispatch({type:"state",payload: e.target.value})}/>
            <label className='label'  htmlFor='country'>Country</label>
            <input  className='input-field' name='country' type='text' placeholder='country' value={state.country}  onChange={(e)=>dispatch({type:"country",payload: e.target.value})} />
          
          <label className='label' htmlFor='pincode'>Pin-Code</label>
          <input  className='input-field' type='number' name='pincode'placeholder='Pincode' value={state.pincode}  onChange={(e)=>dispatch({type:"pincode",payload: e.target.value})} />
          </div>
          <div  className='shiping-method'>
          <label className='label' htmlFor='ship-method'>Shipping Method</label>
            <select  className='input-field' name='ship-method' value={state.shipping_method}  onChange={(e)=>dispatch({type:"shipping-method",payload: e.target.value})}>--Select--
            <option value="Standered">Standard</option>
            <option value="Express">Express</option>
            <option value="Same-Day">Same Day</option>
          </select>
          <button type='submit' className='shipping-btn'  >PROCEED TO PAYMENT</button>
          </div>
    </form>
    </div>
  )
}

export default ShipingMethod
