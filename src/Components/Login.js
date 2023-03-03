import React, { useState } from "react";
import { useFormik } from "formik";
import { loginValidation } from "./Validation";
import register from "./register.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: inpval,
      validationSchema: loginValidation,
      onSubmit: (values, action) => {
        const getData = localStorage.getItem("data");
        console.log(getData);

        const { email, password } = values;
        
        if (getData && getData.length) {
          const userdata = JSON.parse(getData);
          const userlogin = userdata.filter((el, k) => {
            return el.email === email && el.password === password;
          });

          if (userlogin.length === 0) {
            alert("invalid details");
          } else {
            toast("Login Successfully !!");
            action.resetForm();
            navigate("/home");

            localStorage.setItem("user_login", JSON.stringify(userlogin));
          }
        }
      },
    });

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <div className="login">
      <div className="login_container">
        <div className="login_form">
          <h1>Welcome !!</h1>
          <h3>My Bank Website Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="input_block">
              <label className="input_name" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="name"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="input_error">{errors.email}</p>
              ) : null}
            </div>
            <div className="input_block">
              <label className="input_name" htmlFor="pwd">
                Password
              </label>
              <input
                type="password"
                id="pwd"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="input_error">{errors.password}</p>
              ) : null}
            </div>
            <div className="login_btn">
              <p>Want to login using Gmail ?</p>
              <button>Login</button>
            </div>
          </form>
          <div className="loginRegister">
            <h3>New Account?</h3>
            <p onClick={handleRegister}>Sign Up Now</p>
          </div>
        </div>
        <div className="login_image">
          <img src={register} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
