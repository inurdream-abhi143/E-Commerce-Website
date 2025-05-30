import { createContext, useEffect, useState } from "react";
import { saveUserInfoToLocalStorage } from "../Utils/Storage";

const LoginContext = createContext(null);

const LoginContextProvider = ({ children }) => {
  const [signupInfo, setSignupInfo] = useState({});

  useEffect(() => {
    // Only save when signupInfo is not empty
    if (signupInfo && Object.keys(signupInfo).length > 0) {
      saveUserInfoToLocalStorage(signupInfo);
    }
  }, [signupInfo]);

  return (
    <LoginContext.Provider value={{ signupInfo, setSignupInfo }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
