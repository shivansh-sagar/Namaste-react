import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import "../style/Body.css"
import {AiOutlineArrowUp} from "react-icons/ai";
import {BsSearchHeartFill} from "react-icons/bs";


const Body = () => {

  //Local State Variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterResturant, setfilterResturant] = useState([])
  const [searchText, setSearchText]= useState("")

  useEffect(()=>{
    fetchData();
  },[])
  
  const fetchData=async ()=>{
    //const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2585371&lng=82.06598579999999&page_type=DESKTOP_WEB_LISTING"); //sultanpur
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2856374&lng=72.8691092&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); //Mumbai

    const json = await data.json();
    console.log(json)
    //optional chaining
    setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterResturant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus==false){

  return(
    <h1>look like you're offline!! Please check your internet connection</h1>
  )
  }


//search_box logic no enter require
  const seachedText=(e)=>{

    setSearchText(e);
    filtersearch = listOfRestaurant.filter((res)=> (
      res.info.name.toLowerCase().replace(/ /g,"").includes(searchText.toLowerCase().replace(/ /g,""))
      // res.data.cuisines.map((item)=> {(item.toLowerCase().replace(/ /g,"") == searchText.toLowerCase().replace(/ /g,"")? true: false)})
      
     ) )
      
     
    // console.log(filtersearch);
    setfilterResturant(filtersearch)
  }


  return listOfRestaurant.length==0? <Shimmer/>:  (
    <div className="body">
      <div className="body-fun">
 

        <div className="filter">
          <button className="filter-btn" onClick={() => {

            const filtereData =listOfRestaurant.filter(
              (res) => res.info.avgRating > 4

            );

            setfilterResturant(filtereData)
            console.log(listOfRestaurant)

          }}><AiOutlineArrowUp/> Top Rated Restaurant
          </button>
        </div>

{/* new search box */}
        <div className="search-box">
            <button className="btn-search" 
            onClick={()=>{
              filtersearch = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())) 
              
              setfilterResturant(filtersearch)
            }}
            ><BsSearchHeartFill/></button>
            <input type="text" className="input-search" placeholder="Type to search" value={searchText} onChange={(e)=>{seachedText(e.target.value)}} />
        </div>
         
        <button  onClick={()=>{
            const vegFilter= listOfRestaurant.filter(
              (res) => (res.info.veg? false: true)
              
            );
            setfilterResturant(vegFilter)
          }}> veg
        </button>
       
      </div>
      <div className="res-container">
        {
         filterResturant.length != 0 ? filterResturant.map((restaurant) => (
          <Link className="card-link-txt" key={restaurant.info.id} to ={"resturant/"+ restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>))
          : <p className="message-para1">Not<p className="message-para2">founD</p></p>
        }
      </div>
    </div>
  );
};

export default Body;