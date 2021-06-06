import "./User.css";
import {FaSearch} from "react-icons/fa"

const UserContainer = (props) => {
  return (
    <div className="User-box-container">
      <h1 className="User-title">User {props.no}:</h1>
      <hr className="User-hr-line" />
      <div className="User-box-p">
        <p className="User-p">Name: {props.name}</p>
        <p className="User-p">Email id: {props.email}</p>
        <p className="User-p">Phone number: {props.phone}</p>
        <p className="User-p">Services: {props.Services}</p>
        <p className="User-p">State: {props.state}</p>
      </div>
    </div>
  );
}

const User=()=>(
    <div className="User-main">
    <div className="User-search-box">
      <input type="text" className="User-search-input" placeholder="Search" ></input>
      <FaSearch className="searchIcon"/>
    </div>
<UserContainer />
</div>
)

export default User
