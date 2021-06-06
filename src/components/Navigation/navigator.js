import "./navigator.css";
import React from "react";
import env from "../../env/env.js";
import Layout from '../compo_layout/layout.js'
import Dashboard from '../Dashboard/dashboard.js'
import Reports from '../Reports/Reports.js'
import Services from '../Services/Services.js'
import User from '../User/User.js'
import Forgot_Password from '../Forgot Password/Forgot_Password.js' 
import App from '../../App.js'
import { Route, Link, BrowserRouter,Switch } from 'react-router-dom'
function navigator() {
  return (
    <BrowserRouter>
    <div
      className="navigator"
      style={{ backgroundColor: env.colors.darkBlue }}>   
  <ul className="ul-item-container">
  
      <Link className="link item-11"to="Dashboard">Dashboard</Link>
      <Route path="/Dashboard"  component={Dashboard}/>
      <Link className="link "to="Reports">Reports</Link>
      <Route path="/Reports"  component={Reports}/>
      <Link className="link "to="Services">Services</Link>
      <Route path="/Services"component={Services}/>
      <Link className="link "to="User">User</Link>
      <Route path="/User"  component={User}/>
      <Link className="link "to="Forgot_password">Forgot Password</Link> 
      <Route path="/Forgot_Password"  component={Forgot_Password}/>
      </ul>
    </div>
    </BrowserRouter>
  );
}

export default navigator;
