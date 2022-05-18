import { useState } from "react";

import axios from "axios";

const Signup = () => {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState("");

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://employee-management-system-backend-six.vercel.app/admin/signup",
        input
      )
      .then((response) => setAlert(response.data));
  };

  return (
    <>
      <div>
        <h2>ADMIN SIGN_UP</h2>
        <form onSubmit={submitHandler}>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={inputHandler}
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={inputHandler}
          />
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
          <button>Sign_Up</button>
          {alert && (
            <div className="alert-message">
              <p>{alert}</p>
              <p>
                <span
                  onClick={() => setAlert("")}
                  style={{ cursor: "pointer" }}
                >
                  &#10005;
                </span>
              </p>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default Signup;