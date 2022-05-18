import "./EmployeeDashboard.css";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

const EmployeeDashboard = ({ employee }) => {
  return (
    <>
      <div className="employee-dashboard">
        <div>
          <button><Link to="/" style={{ color: "green" }}>
            Go Back To Home
          </Link></button>
        </div>
        <h1>Employee Dashboard</h1><br/><br/>
        <h2>Employee Information</h2>
        <div className="employee-info">
          <div>
            <strong>First Name</strong>
          </div>
          <div>
            <strong>Last Name</strong>
          </div>
          <div>
            <strong>Email Address</strong>
          </div>
        </div>
        <div className="employee-info">
          <div>{employee.firstName}</div>
          <div>{employee.lastName}</div>
          <div>{employee.email}</div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    employee: state.signin.employee,
  };
};

export default connect(mapStateToProps, null)(EmployeeDashboard);