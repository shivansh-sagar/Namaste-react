import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";


const Body = () => {

  //Local State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
 
  useEffect(()=>{
    fetchData();
  },[])
  
  const fetchData=async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2585371&lng=82.06598579999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json)
    //optional chaining
    setListOfRestaurant(json?.data?.cards[1]?.data?.data?.cards)
  }
  // const [searchText, SetSearchText] = useState("");
// conditional rendering 
// if(listOfRestaurant.length=== 0){
//   return <Shimmer/>
// }

  return listOfRestaurant.length===0? <Shimmer/>:  (
    <div className="body">
      <div className="body-fun">
{/* 
        <div className="search">
          <input type="search" value={searchText} onChange={(e)=>SetSearchText(e.target.value)} placeholder="Search" />
          <button className="search-btn" onClick={()=>{
            const searchRes = listOfRestaurant.find(
              (Res)=> Res.data.name == searchText
            )
          }}>Search</button>
        </div> */}

        <div className="filter">
          <button className="filter-btn" onClick={() => {

            const filtereData = listOfRestaurant.filter(
              (res) => res.data.rating > 4

            );

            setListOfRestaurant(filtereData)
            console.log(listOfRestaurant)

          }}> Top Rated Restaurant</button>
        </div>
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