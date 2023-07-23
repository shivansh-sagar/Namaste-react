import { LOGO_URL } from "../utils/constant";
import { useState } from "react";


const Header =(props) =>{
   
  const [btnName, setbtnName]= useState("login");
  const navLinks = [{name:"Home",
          link:"/home"},{name:"About Us"},{name:"Contact Us"},{name:"Cart"}]

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="" />
        </div>
        <div className="nav-items">
          <ul>
            {navLinks.map((item)=>
              <li className="nav-links" key={item.name}>{item.name}<span></span></li>
            )}
            <button className="login-btn" onClick={()=>{
              btnName==="login"?setbtnName("logout"):setbtnName("login")
            }} >{btnName}</button>
          </ul>
        </div>
      </div>
    )
  };

  export default Header;