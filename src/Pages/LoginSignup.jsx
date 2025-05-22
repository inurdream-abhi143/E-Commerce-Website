import React from "react";
import "./CSS/LoginSignup.css";
import { useForm } from "react-hook-form";

const LoginSignup = () => {
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
      <form className="loginsignup" onSubmit={handleSubmit(onSubmit)}>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
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
          </div>
          <input type="submit" value="SignUp" className="button" />
          <p className="loginsignup-login">
            Already have an Account <span>Login here</span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing i agree to the term of use & privacy ploicy.</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
