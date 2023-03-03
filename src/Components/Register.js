import React, { useState } from "react";
import { useFormik } from "formik";
import { registerValidation } from "./Validation";
import register from "./register.jpg";
import "./Register.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const [inpval, setInpval] = useState({
    name: "",
    address: "",
    dob: "",
    email: "",
    type: "",
    password: "",
    cnfPassword: "",
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: inpval,
      validationSchema: registerValidation,
      
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.js ~ Registration ~ values",
          values
        );
        toast("Register Successfully !!");
        action.resetForm();
        localStorage.setItem("userRegister", JSON.stringify([...data, values]));
      },
    });

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="registation">
      <div className="registation_container">
        <div className="registation_form">
          <h1>Welcome !!</h1>
          <h3>My Bank Website Registration</h3>
          <form onSubmit={handleSubmit}>
            <div className="input_block">
              <label className="input_name" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className="input_error">{errors.name}</p>
              ) : null}
            </div>
            <div className="input_block">
              <label className="input_name" htmlFor="dob">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                placeholder="Date Of Birth"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dob && touched.dob ? (
                <p className="input_error">{errors.dob}</p>
              ) : null}
            </div>
            <div className="input_block">
              <label className="input_name" htmlFor="addr">
                Address
              </label>
              <input
                type="text"
                id="addr"
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.address && touched.address ? (
                <p className="input_error">{errors.address}</p>
              ) : null}
            </div>
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
              <label className="input_name" htmlFor="type">
                Choose Account Type
              </label>
              <select
                id="type"
                name="type"
                value={values.type}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="saving">Saving Account</option>
                <option value="current">Current Account</option>
                <option value="salary">Salary Account</option>

                {errors.type && touched.type ? (
                  <p className="input_error">{errors.type}</p>
                ) : null}
              </select>
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
            <div className="input_block">
              <label className="input_name" htmlFor="cnfPwd">
                Confirm Password
              </label>
              <input
                type="password"
                id="cnfPwd"
                placeholder="Confirm Password"
                name="cnfPassword"
                value={values.cnfPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.cnfPassword && touched.cnfPassword ? (
                <p className="input_error">{errors.cnfPassword}</p>
              ) : null}
            </div>
            <div className="registration_btn">
              <p>Want to Register using Gmail ?</p>
              <button>Register</button>
            </div>
          </form>
          <div className="registerLogin">
            <h3>Already Have Account?</h3>
            <p onClick={handleLogin}>Sign In Now</p>
          </div>
        </div>
        <div className="registation_image">
          <img src={register} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Register;
