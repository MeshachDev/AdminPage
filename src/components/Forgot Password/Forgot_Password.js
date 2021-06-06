
import {AiOutlineMail} from "react-icons/ai"
import "./Forgot_password.css";
const ForgotMain = (props) => {
  return (
    <div className="forgot-main">
     
      <button className="forgot-btn">
        <AiOutlineMail className="AiOutlineMail" />
      </button>
      <h1 className="forgot-title">Forgot Password:</h1>
    </div>
  );
};
const Forgot_password = () => (
  <div className="Forgot-main">
    <ForgotMain/>
    <ForgotContainer/>
  </div>
);
const ForgotContainer = (props) => (
  <div className="Forgot-box-container">
    <h1 className="Forgot-title">Reported by {props.reported_by}:</h1>
    <hr className="Forgot-hr-line" />
    <div className="Forgot-box-p">
      <p className="Forgot-p">Name: {props.name}</p>
      <p className="Forgot-p">Email id: {props.email}</p>
      <p className="Forgot-p">Phone number: {props.phone}</p>
      <p className="Forgot-p">Services: {props.Services}</p>
      <p className="Forgot-p">OTP: {props.otp}</p>
      <p className="Forgot-p">State: {props.state}</p>
    </div>
  </div>
);
export default Forgot_password;
