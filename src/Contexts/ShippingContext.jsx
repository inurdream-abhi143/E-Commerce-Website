import { createContext, useState } from "react";

const ShippingContext = createContext(null)


const ShippingContextProvider = ({children})=>{
    const[shippingInfo,setShippingInfo] = useState({});


const ShippingValue={shippingInfo,setShippingInfo };
return(
<ShippingContext.Provider value={ShippingValue}>
    {children}
</ShippingContext.Provider>
);
};
export {ShippingContext , ShippingContextProvider}