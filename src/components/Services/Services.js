import React from 'react';
import "./Services.css";
import {FaSearch} from "react-icons/fa"
const Services = () => {
  const [serviceNo, setserviceNo] = React.useState(0)
  return (
  <div className="Services-main">
      {/* Search Box */}
    <div className="Service-search-box">
      <input type="text" className="Service-search-input" placeholder="Search" ></input>
      <FaSearch className="searchIcon"/>
    </div>
    {/*Service info container*/}
    <ServiceContainer no={serviceNo}/>
    </div>
  )
}
const ServiceContainer = (props)=>(
  <div className="Service-box-container">
      <h1 className="Service-title">Service {props.no}:</h1>
    <hr className="Service-hr-line"/>
    <div className="Service-box-p">
    <p className="Service-p">Name: {props.name}</p>
    <p className="Service-p">Description: {props.description}</p>
    <p className="Service-p">Contract: {props.contract}</p>
    <p className="Service-p">Address: {props.address}</p>
    <p className="Service-p">Quantitatve: {props.quantitatve}</p>
    <p className="Service-p">State: {props.state}</p>
    <p className="Service-p">Type: {props.type}</p>
    </div>
    </div>
)
export default Services;
