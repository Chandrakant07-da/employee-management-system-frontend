import { Link } from "react-router-dom";

import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <h1 className="title">EMPLOYEE MANAGEMENT SYSTEM</h1>
      <h3 className="description">Welcome to Employee Management System Application</h3>
      <Link className="button" to="/admin">
        ADMIN
      </Link>
      <Link className="button" to="/employee">
        EMPLOYEE
      </Link>
    </>
  );
};

export default Homepage;