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

const Header =(props) =>{
  function th(){
    
  }
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
  const {resData} = props;
  const{cloudinaryImageId, name, cuisines, rating}= resData.data;
  let img = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId;
  return (
   
    <div className="res-card">
      <div className="res-img">
        <img className="res-logo"
        src={img} loading="lazy" alt="food-logo" />
      </div>
      <h3>{name}🍲 </h3>
      <details><summary>{cuisines.slice(0,2).join(", ")}</summary><p>{cuisines.slice(2).join(", ")}</p></details>
      <h4>{rating}⭐</h4>

    </div>
  );
};
 

// not using keys (not acceptable) <<< index as key <<<<<<< unique id (best practice)

const Body =() =>{
  return (
  <div className="body">
    <div className="search">Serach</div>
    <div className="res-container">
     {
      data.map((restaurant)=> (<RestaurantCard key={restaurant.id} resData={restaurant}/>))
     }
    </div>
  </div>
  );
};

const  AppLayout =() =>{
  const [theme, setTheme] = React.useState("light");
  return (
    <div className={`app ${theme}`}>
     
      <Header theme="light" />
      <Body/>
    </div>
  );
};


const Root = ReactDOM.createRoot(document.getElementById("Root"));
Root.render(<AppLayout/>);

