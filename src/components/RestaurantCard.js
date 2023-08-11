import { CDN_URL } from "../utils/constant";
import "../style/RestaurantCard.css"
import {AiFillStar} from 'react-icons/Ai'

const RestaurantCard = (props) =>{
    const {resData} = props;
    console.log(resData);
     const{cloudinaryImageId, name, cuisines, avgRating}= resData.info;
    let img = CDN_URL+cloudinaryImageId;
    return (
     
      <div className="res-card">
        <div className="res-img">
          <img className="res-logo"
          src={img} loading="lazy" alt="food-logo" />
        </div>
        <div className="ml-8">
          <h3 className="text-xl">{name}🍲 </h3>
          <details><summary>{cuisines.slice(0,2).join(", ")}</summary><p>{cuisines.slice(2).join(", ")}</p></details>
          <h4 className="#f9fafb"><AiFillStar/>{avgRating}</h4>
         </div>
      </div>
    );
  };

  export default RestaurantCard