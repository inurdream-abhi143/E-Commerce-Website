import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import { useForm } from "react-hook-form";

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      {" "}
      {/* {isLogin === true? ()} */}
      <form className="loginsignup" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginsignup-container">
          <h1>Creat Account</h1>
          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              id="name"
              className={`${errors.name ? "is-invalid" : ""}`}
              {...register("name", { required: true })}
            />
            {errors.name && <div className="error">This field is required</div>}
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              className={`${errors.email ? "is-invalid" : ""}`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="error">This Field is required</div>
            )}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              className={`${errors.password ? "is-invalid" : ""}`}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div className="error">This field is required</div>
            )}
            <input
              type="password"
              placeholder="Confirm Your Password"
              name="c-password"
              id="c-password"
              className={`${errors.password ? "is-invalid" : ""}`}
              {...register("c-password", { required: true })}
            />
            {errors.password && (
              <div className="error">This field is required</div>
            )}
          </div>
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              name="agree"
              id="termagree"
              className={`${errors.agree ? "is-invalid" : ""}`}
              {...register("agree", { required: true })}
            />
            <p>By continuing i agree to the term of use & privacy ploicy.</p>
            {errors.agree && (
              <div className="error">This field is required</div>
            )}
          </div>
          <div className="loginsignup-btn">
            <input type="submit" value="SignUp" className="button" />
          </div>
          <p className="loginsignup-login">
            Already have an Account ? <span>Login here</span>
          </p>
        </div>
      </form>
      <form className="loginsignup">
        <div className="loginsignup-container">
          <h1>Welcome Back</h1>
          <div className="loginsignup-fields">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter Password"
            />
          </div>
          <div className="login-remember">
            <input type="checkbox" name="remember" id="remember" />
            <p>Remember me</p>
          </div>
          <div className="loginsignup-btn">
            <input type="submit" value="Login" className="button" />
          </div>
          <div className="login-forgot">
            <p className="loginsignup-forgot">
              Forgot Password? <span>Click here</span>
            </p>
            <p className="loginsignup-login">
              Don't have an Account? <span>SignUp here</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
