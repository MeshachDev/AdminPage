import React, { useState } from "react";
import "./Reports.css";
import { FaRegBookmark } from "react-icons/fa";
const Reportscompo = (props) => {
  const [reports, setreports] = useState([]);
  return (
    <div className="reports-main">
      <h1 className="reports-title">Reports:</h1>
      <button className="reports-btn" onclick={ReportsContainer}>
        <FaRegBookmark className="FaRegBookmark" />
      </button>
    </div>
  );
};
const Reports = () => (
  <div className="Reports-main">
    <Reportscompo />
     <ReportsContainer/>
  </div>
);
const ReportsContainer = (props) => (
  <div className="Reports-box-container">
    <h1 className="Reports-title">Reported by {props.reported_by}:</h1>
    <hr className="Reports-hr-line" />
    <div className="Reports-box-p">
      <p className="Reports-p">Subject: {props.name}</p>
      <p className="Reports-p-des">Description: {props.description}</p>
      <p className="Reports-p">Remarks: {props.remarks}</p>
    </div>
    <button className="Reports-box-btn-verify">Verify</button>
  </div>
);
export default Reports;
