import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css"
import { MdOutlineFastfood } from 'react-icons/md'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import UserContext from "../utils/UserContext";



const Nav = (props) => {
  const [toggle, setToggle] = useState(false)
  const {loggedInUser}=useContext(UserContext)
  console.log(loggedInUser)
  // const [btnName, setbtnName] = useState("login");
  return (
    <nav className='app__navbar '>
      <div className="app__navbar-logo">
        <p><MdOutlineFastfood />Moody Foody</p>

      </div>

      <ul className="app__navbar-links">
        <Link className="nav-items-bars" to="/">nome</Link>
        <Link className="nav-items-bars" to="/about">tbout</Link>
        <Link className="nav-items-bars" to="/contact">Contact</Link>
        <Link className="nav-items-bars" to="/Grocery">Grocery</Link>
        <li>{loggedInUser}</li>
        {/* <button className="login-btn" onClick={() => {
          { props.changemode }
          btnName === "login" ? setbtnName("logout") : setbtnName("login")
        }} >{btnName}</button> */}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="icon-x" />

        {
          toggle && (
            <div>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                <Link className="link" onClick={() => setToggle(false)} to="/">home</Link>
                <Link className="link" onClick={() => setToggle(false)} to="/about">about</Link>
                <Link className="link" onClick={() => setToggle(false)} to="/contact">contact</Link>
                <Link className="link" onClick={() => setToggle(false)} to="/grocery">Grocery</Link>
                <li className="dUser text-green-400 font-bold">{loggedInUser}</li>
              </ul>
            </div>
          )
        }
      </div>

    </nav>
  )
};

export default Nav;