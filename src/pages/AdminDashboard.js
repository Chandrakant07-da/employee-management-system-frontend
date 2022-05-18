import "./AdminDashboard.css";

import { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";

const AdminDashboard = ({ getToken, getAdmin }) => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
     .get(
        "https://employee-management-system-backend-six.vercel.app/admin/getall",
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": getToken,
          },
        }
      )
     .then((response) => {
        setEmployees(response.data);
      });
  });

  const deleteEmployee = (id) => {
    axios.delete(
      `https://employee-management-system-backend-six.vercel.app/admin/delete/`,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": getToken,
        },
      }
    );
  };

  return (
    <>
      <div className="admin-dashboard">
        <div>
         <button><Link to="/" style={{ color: "green" }}>
            Go Back To HOME
          </Link></button> 
        </div>
        <h1>ADMIN DASHBOARD</h1>
        <h2>All_Employee Details</h2>
        {employees.length === 0 && <p>No Employees</p>}
        {employees.length > 0 && (
          <div className="employee-details">
            <h3>
              <strong>FIRST Name</strong>
            </h3>
            <h3>
              <strong>LAST Name</strong>
            </h3>
            <h3>
              <strong>E-MAIL</strong>
            </h3>
          </div>
        )}
        {employees.map((employee) => (
          <div key={employee._id} className="employee">
            <div>{employee.firstName}</div>
            <div>{employee.lastName}</div>
            <div>{employee.email}</div>
            <div
              className="edit"
              onClick={() => {
                navigate(`/admin/edit/${employee._id}`);
              }}
            >
              UPDATE
            </div>
            <div
              className="delete"
              onClick={() => {
                deleteEmployee(employee._id);
              }}
            >
              DELETE
            </div>
          </div>
        ))}
        <div>
          <button><strong><Link to="/admin/add" style={{ color: "blue" }}>
            ADD NEW EMPLOYEE
          </Link></strong></button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getToken: state.signin.token,
    getAdmin: state.signin.admin,
  };
};

export default connect(mapStateToProps, null)(AdminDashboard);