import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data";

/*
 * Header
*   - Logo
*   -Nav Items
* Body
*   - Search 
*   - restaurantContainer
*         -RestaurantCart
*            -Img
*            -Name od restaurant, Star Rating, Cuisine, devivery time 
* footer
*   - Copyright
*   - Links
*   - Address
*   - Contact
*/

const Header =() =>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://image.freepik.com/free-vector/food-logo-design_139869-254.jpg" alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const RestaurantCard = (props) =>{
  return (
    <div className="res-card" id={props.id}>
      
      <img className="res-logo"
      src={props.img} loading="lazy" alt="food-logo" />
      <h3>{props.name}</h3>
      <h4>{props.cusine}</h4>
      <h4>{props.rating}</h4>

    </div>
  );
};

const Body =() =>{
  return (
  <div className="body">
    <div className="search">Serach</div>
    <div className="res-container">
      {data.map((item,id )=> (
        <RestaurantCard id={id.id} img={item.img}
        name={item.name} cusine={item.cusine} rating={item.rating}
      />
      ))}
      

    </div>
  </div>
  );
};

const  AppLayout =() =>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};


const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(<AppLayout/>);

