import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import { setEmployee } from "../../redux/signIn/signin.action";

const Signin = ({ setEmployee }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });


  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };


  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://employee-management-system-backend-six.vercel.app/employee/signin",
        input
      )
      .then((response) => {
        console.log(typeof response.data);
        setEmployee(response.data);
      })
      .then(() => {
        navigate("/employee/dashboard");
      });
  };


  return (
    <>
      <div>
        <h2>EMPLOYEE SIGN_IN</h2>
        <form onSubmit={submitHandler}>
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email Address"
            onChange={inputHandler}
          />
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            onChange={inputHandler}
          />
          <button>Sign_In</button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmployee: (employee) => dispatch(setEmployee(employee)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);