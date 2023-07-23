import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";


const Body = () => {

  //Local State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterResturant, setfilterResturant] = useState([])
  const [searchText, setSearchText]= useState("")

  useEffect(()=>{
    fetchData();
  },[])
  
  const fetchData=async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2585371&lng=82.06598579999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json)
    //optional chaining
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    setfilterResturant(json?.data?.cards[2]?.data?.data?.cards)
  }
  const seachedText=(e)=>{

    setSearchText(e);
    filtersearch = listOfRestaurant.filter((res)=> (
      res.data.name.toLowerCase().replace(/ /g,"").includes(searchText.toLowerCase().replace(/ /g,""))
      // res.data.cuisines.map((item)=> {(item.toLowerCase().replace(/ /g,"") == searchText.toLowerCase().replace(/ /g,"")? true: false)})
     ) )
      
     
    // console.log(filtersearch);
    setfilterResturant(filtersearch)
  }


  return listOfRestaurant.length===0? <Shimmer/>:  (
    <div className="body">
      <div className="body-fun">
 

        <div className="filter">
          <button className="filter-btn" onClick={() => {

            const filtereData =listOfRestaurant.filter(
              (res) => res.data.avgRating > 4

            );

            setfilterResturant(filtereData)
            console.log(listOfRestaurant)

          }}> Top Rated Restaurant</button>

          <input  className=" search" type="text" value={searchText} onChange={(e)=>{seachedText(e.target.value)}}/>
          <button className="" onClick={()=>{
            console.log(searchText)
            filtersearch = listOfRestaurant.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase())) 
            
        
            setfilterResturant(filtersearch)
          }}>Search</button>
          <button onClick={()=>{
            const vegFilter= listOfRestaurant.filter(
              (res) => (res.data.veg? false: true)
              
            );
            setfilterResturant(vegFilter)
          }}>veg</button>
        </div>
      </div>
      <div className="res-container">
        {
          filterResturant.map((restaurant) => (<RestaurantCard key={restaurant.id} resData={restaurant} />))
        }
      </div>
    </div>
  );
};

export default Body;