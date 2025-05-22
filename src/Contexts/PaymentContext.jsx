import { createContext, useState } from "react";

const PaymentContext = createContext({});

const PaymentContextProvider = ({ children }) => {
  const [paymentInfo, setPaymentInfo] = useState({});
  const paymentValue = { paymentInfo, setPaymentInfo };
  return (
    <PaymentContext.Provider value={paymentValue}>
      {children}
    </PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentContextProvider };
