import React from 'react'
import "./ShipingMethod.css"

const ShipingMethod = () => {
  return (
    <div className='Shiping-method'>
    <form className='shiping-container'> 

            <div className='contact-info'>
            <label htmlFor='full-name'>Name</label>
            <input type='text' placeholder='Enter Your Name' />
            <label htmlFor='contact'>Mobile No</label>
            <input type='number' placeholder='+91'  />
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='email'  />
            </div>
            
          <div className='address-info'>

          <label htmlFor='address'>Adreess</label>
          <input type='text' name='address'  placeholder='House No,Street'/>
          <label htmlFor='landmark'>Landmark</label>
            <input name='landmark' type='text' placeholder='landmark'/>
            <label htmlFor='city'>City</label>
            <input name='city' type='text' placeholder='City'/>
            <label htmlFor='state'>State</label>
            <input name='state' type='text' placeholder='state'/>
            <label htmlFor='country'>Country</label>
            <input name='country' type='text' placeholder='country'/>
          
          <label htmlFor='pincode'></label>
          <input type='number' name='pincode' />
          </div>
          <div className='shiping-method'>
          <label htmlFor='ship-method'></label>
            <select name='ship-method'>
            <option value="Standered">Standered</option>
            <option value="Express">Express</option>
            <option value="Same-Day">Same Day</option>
          </select>
          <button >PROCEED TO PAYMENT</button>
          </div>
    </form>
    </div>
  )
}

export default ShipingMethod
