import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContext";
import { saveUserInfoToLocalStorage } from "../../Utils/Storage";

const Signup = () => {
  const navigate = useNavigate();
  const { setSignupInfo } = useContext(LoginContext);
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
      Cpassword: "",
      termagree: false,
    },
  });

  const onSubmit = (data) => {
    // console.log("userData", data);
    if (data.password !== data.Cpassword) {
      alert("Passwords do not match");
      return;
    } else {
      const UserData = {
        name: data.name,
        email: data.email,
        password: data.password,
        confirmPassword: data.Cpassword,
        termagree: data.agree,
      };
      setSignupInfo(UserData);
      console.log("UserData", UserData);
      saveUserInfoToLocalStorage(UserData)
    }
  };
  const handleLoginForm = () => {
    navigate("/login");
  };

  return (
    <div>
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
              {...register("name", {
                required: true,
                pattern: {
                  value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                  message: "Invalid name format",
                },
              })}
            />
            {errors.name && (
              <div className="error">
                {errors.name.type === "required"
                  ? "This field is required"
                  : errors.name.message}
              </div>
            )}
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              className={`${errors.email ? "is-invalid" : ""}`}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <div className="error">
                {errors.email.type === "required"
                  ? "This Field is required"
                  : errors.email.message}
              </div>
            )}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              className={`${errors.password ? "is-invalid" : ""}`}
              {...register("password", {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                  message: "pasword Invalid format",
                },
              })}
            />
            {errors.password && (
              <div className="error">
                {errors.password.type === "required"
                  ? "This Field is required"
                  : errors.password.message}
              </div>
            )}
            <input
              type="password"
              placeholder="Confirm Your Password"
              name="Cpassword"
              id="Cpassword"
              className={`${errors.Cpassword ? "is-invalid" : ""}`}
              {...register("Cpassword", {
                required: true,
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                  message: "pasword Invalid format",
                },
              })}
            />
            {errors.Cpassword && (
              <div className="error">
                {errors.Cpassword.type === "required"
                  ? "This Field is required"
                  : errors.password.message}
              </div>
            )}
          </div>
          <div className="loginsignup-agree">
            <input
              type="checkbox"
              name="termagree"
              id="termagree"
              className={`${errors.termagree ? "is-invalid" : ""}`}
              {...register("termagree", {
                required: true,
              })}
            />
            <p>By continuing i agree to the term of use & privacy ploicy.</p>
            {errors.termagree && (
              <div className="error">This field is required</div>
            )}
          </div>
          <div className="loginsignup-btn">
            <input type="submit" value="SignUp" className="button" />
          </div>
          <p className="loginsignup-login">
            Already have an Account ?{" "}
            <span onClick={handleLoginForm}>Login here</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
