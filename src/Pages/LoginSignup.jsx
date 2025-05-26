import React, { useContext, useState } from "react";
import "./CSS/LoginSignup.css";
import Login from "../Components/LoginSignPages/Login";
import Signup from "../Components/LoginSignPages/Signup";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  // onSwitch={() => setIsLogin(true)}
  return (
    <div>
      {""}
      <Login />
      <Signup />
    </div>
  );
};

export default LoginSignup;
