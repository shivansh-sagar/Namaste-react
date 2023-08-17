import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css"
import {MdOutlineFastfood} from 'react-icons/md'



const Header =(props) =>{
   
  const [btnName, setbtnName]= useState("login");
    return (
      <div className='header shadow-md shadow-purple-3004 '>
        <div className="logo-container">
          <p><MdOutlineFastfood/>Moody Foody</p>
          
        </div>
        <div className="nav-items">
          <ul>
           <Link className="nav-items-bars" to="/">Home</Link>
           <Link className="nav-items-bars"  to="/about">AboutUs</Link>
           <Link className="nav-items-bars"  to="/contact">Contact Us</Link>
           <Link className="nav-items-bars"  to="/Grocery">Grocery</Link>
            <button className="login-btn" onClick={()=>{ {props.changemode}
              btnName==="login"?setbtnName("logout"):setbtnName("login")
            }} >{btnName}</button>
          </ul>
        </div>
      </div>
    )
  };

  export default Header;