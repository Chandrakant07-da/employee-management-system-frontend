import Signin from "../components/employee/Signin";
import Signup from "../components/employee/Signup";
import "./Employeepage.css";

const Employeepage = () => {
  return (
    <>
      <div className="signup-signin-container">
        <div className="signuppage">
          <Signup />
        </div>
        <div className="signinpage">
          <Signin />
        </div>
        
      </div>
    </>
  );
};

export default Employeepage;