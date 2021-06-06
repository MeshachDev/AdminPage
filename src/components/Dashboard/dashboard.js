 import React ,{useState}from 'react';
import './dashboard.css'
import Reports from '../Reports/Reports'
const Dashboard = () => {
  //states to update
  const [reports, setReports] = useState(0);
  const [forget_password, setForget_password] = useState(0);
  const [user_accounts, setUser_accounts] = useState(0);
  const [services, setServices] = useState(0);
  
  return (
  <div className="dashboard-main">
    <Notify  topic={"Reports"} number={reports}/>
    <Notify  topic={"ForgetPassword"} number={forget_password}/>
    <Notify  topic={"User Accounts"} number={user_accounts}/>
    <Notify  topic={"Services"} number={services}/>
  </div>
  );
}


const Notify = (props) => {
 
  return (
    <div className="noti-box" >
      <p className="noti-topic">{props.topic}</p>
      <p className="noti-number">{props.number}</p>
      <div className="noti-design-circle-1"></div>
      <div className="noti-design-circle-2"></div>
      
    </div>
  )
};
export default Dashboard;