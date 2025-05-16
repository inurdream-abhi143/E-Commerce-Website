import React, { useContext } from 'react'
import { ShippingContext } from '../../Contexts/ShippingContext'

const Payment = () => {
    const{shippingInfo} =useContext(ShippingContext)

    console.log("my data", shippingInfo);
  return (
    <div className='payment'>
        <div className="userinfo">
            <p>{shippingInfo.name}</p>
        </div>
      
    </div>
  )
}

export default Payment
