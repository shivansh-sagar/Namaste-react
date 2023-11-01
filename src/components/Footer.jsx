import { useContext } from "react";
import { Link } from "react-router-dom";
import "../style//Footer.css";
import UserContext from "../utils/UserContext";

const Footer = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { theme } = useContext(UserContext);

  return (
    <><h1 className="mt-5 flex flex-row justify-center ">Made with Shivanshu</h1>
      <div
        className={` bg-gray-700 footer-container flex
             justify-evenly p-5  `}>
              
        <div className=" text-white">
          <ul>
          <h1 className=" text-white m-2">{loggedInUser}</h1>
            
            <li>shivanshsagar987@gmail.com</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col justify-center gap-2  uppercase text-white text-sm">
            <h1 className=" text-xl my-2  font-bold">Overview</h1>
          <Link className=" " to="/">
          home
        </Link>
        <Link className="" to="/res">
          restaurant
        </Link>
        <Link className="" to="/about">
          About
        </Link>
        <Link className="" to="/contact">
          Contact
        </Link>
        <Link className="" to="/Grocery">
          Grocery
        </Link>
          </ul>
        </div>
        
      </div>
    </>
  );
};
export default Footer;
