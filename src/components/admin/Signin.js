import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

import { setAdmin, setToken } from "../../redux/signIn/signin.action";

const Signin = ({ setToken, setAdmin }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://employee-management-system-backend-six.vercel.app/admin/signin",
        input
      )
      .then((response) => {
        setToken(response.data.token);
        setAdmin(response.data.admin);
        navigate(`/admin/dashboard`);
      });
  };
  return (
    <>
      <div>
        <h2>ADMIN SIGN_IN</h2>
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
    setToken: (token) => dispatch(setToken(token)),
    setAdmin: (admin) => dispatch(setAdmin(admin)),
  };
};

export default connect(null, mapDispatchToProps)(Signin);