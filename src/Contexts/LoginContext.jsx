import { createContext, useState } from "react";

const LoginContext = createContext(null);

const LoginContextProvider = ({ children }) => {
  const [signupInfo, setSignupInfo] = useState({});

  return (
    <LoginContext.Provider value={{ signupInfo, setSignupInfo }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginContextProvider };
