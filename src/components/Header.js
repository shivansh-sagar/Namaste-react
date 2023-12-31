import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";
import { MdOutlineFastfood } from "react-icons/md";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { GiShoppingCart } from "react-icons/gi";
import { useSelector } from "react-redux";

const Header = (props) => {
  const [toggle, setToggle] = useState(false);

  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)

  return (
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <p>
          <MdOutlineFastfood />
          Moody Foody
        </p>
      </div>

      <ul className="app__navbar-links">
        <Link className="nav-items-bars" to="/">
          home
        </Link>
        <Link className="nav-items-bars" to="/res">
          restaurant
        </Link>
        <Link className="nav-items-bars" to="/about">
          About
        </Link>
        <Link className="nav-items-bars" to="/contact">
          Contact
        </Link>
        <Link className="nav-items-bars" to="/Grocery">
          Grocery
        </Link>
        <button className="nav-items-bars" onClick={props.toggleMode}>
          mode
        </button>

        <Link className="nav-items-bars flex " to='/cart'>
          Cart ({cartItems.length})item{" "}
          <h1>
            <GiShoppingCart></GiShoppingCart>
          </h1>
        </Link>
      </ul>

      {/* <Link className="nav-items-bars" >Cart <h1><GiShoppingCart></GiShoppingCart></h1></Link> */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} className="icon-x" />

        {toggle && (
          <div>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <Link className="link" onClick={() => setToggle(false)} to="/">
                home
              </Link>
              <Link className="link" onClick={() => setToggle(false)} to="/res">
                Restaurant
              </Link>
              <Link
                className="link"
                onClick={() => setToggle(false)}
                to="/about"
              >
                about
              </Link>
              <Link
                className="link"
                onClick={() => setToggle(false)}
                to="/contact"
              >
                contact
              </Link>
              <Link
                className="link"
                onClick={() => setToggle(false)}
                to="/grocery"
              >
                Grocery
              </Link>

              <Link className="link flex" to='/cart'>
                
                <h1>
                  <GiShoppingCart></GiShoppingCart>
                </h1>
                cart ({cartItems.length})
              </Link>
              {/* <Link className="link" onClick={() => setToggle(false)} >cart <h1><GiShoppingCart></GiShoppingCart></h1></Link> */}

              <label className="switch link">
                <input type="checkbox" onClick={props.toggleMode} />
                <span className="slider round"></span>
              </label>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
