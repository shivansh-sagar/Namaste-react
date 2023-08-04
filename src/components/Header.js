import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import "../style/Header.css"
import {GiForkKnifeSpoon} from 'react-icons/gi'



const Header =(props) =>{
   
  const [btnName, setbtnName]= useState("login");
  console.log("header render")



    return (
      <div className="header">
        <div className="logo-container">
        <Link to="/"><GiForkKnifeSpoon/>Moody Foody</Link>
          
        </div>
        <div className="nav-items">
          <ul>
           <Link className="nav-items-bars" to="/">Home</Link>
           <Link className="nav-items-bars"  to="/about">AboutUs</Link>
           <Link className="nav-items-bars"  to="/contact">Contact Us</Link>
           <Link className="nav-items-bars"  to="/cart">Cart</Link>
            <button className="login-btn" onClick={()=>{
              btnName==="login"?setbtnName("logout"):setbtnName("login")
            }} >{btnName}</button>
          </ul>
        </div>
      </div>
    )
  };

  export default Header;