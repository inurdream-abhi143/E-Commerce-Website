import { createContext } from "react";

const LoginContext = createContext(null);

const LoginContextProvider = ({ children }) => {
  const [signupInfo, setSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termagree: false,
  });

  return (
    <LoginContext.Provider value={{ signupInfo, setSignupInfo }}>
      {children}
    </LoginContext.Provider>
  );
};
