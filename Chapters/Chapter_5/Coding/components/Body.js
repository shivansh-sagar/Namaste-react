import data from "../utils/data";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react"


const Body = () => {

  //Local State Variable - Super powerful variable
const  [listOfRestaurant , setListOfRestaurant ] = useState(data)



  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{

          const filtereData = listOfRestaurant.filter(
            (res) => res.data.rating > 4

          );
          
          setListOfRestaurant(filtereData)
          console.log(listOfRestaurant)

        } }> Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {
          listOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.id} resData={restaurant} />))
        }
      </div>
    </div>
  );
};

export default Body;