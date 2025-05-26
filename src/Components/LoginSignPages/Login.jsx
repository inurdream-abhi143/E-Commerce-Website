import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      remPassword: false,
    },
  });

  const handleSignupForm = () => {
    navigate("/signup");
  };
  const onSubmit = (data) => {
    console.log("userLoginData", data);
  };
  return (
    <div>
      <form className="loginsignup" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginsignup-container">
          <h1>Welcome Back</h1>
          <div className="loginsignup-fields">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className={`${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Please Enter a valid Email Address",
                },
              })}
            />
            {errors.email && (
              <div className="error">
                {errors.email.type === "required"
                  ? "This field is required"
                  : errors.email.message}
              </div>
            )}
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter Password"
              className={`${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                  message: "Please Enter a valid Password",
                },
              })}
            />
          </div>
          {errors.password && (
            <div className="error">
              {errors.password.type === "required"
                ? "This field is requires"
                : errors.password.message}
            </div>
          )}
          <div className="login-remember">
            <input
              type="checkbox"
              name="remPassword"
              id="remember"
              className={`${errors.remPassword ? "is-invalid" : ""}`}
              {...register("remPassword", { required: true })}
            />
            <p>Remember me</p>
            {errors.remPassword && (
              <div className="error">This field is required</div>
            )}
          </div>
          <div className="loginsignup-btn">
            <input type="submit" value="Login" className="button" />
          </div>
          <div className="login-forgot">
            <p className="loginsignup-forgot">
              Forgot Password? <span>Click here</span>
            </p>
            <p className="loginsignup-login">
              Don't have an Account?{" "}
              <span onClick={handleSignupForm}>SignUp here</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
