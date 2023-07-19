import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const{cloudinaryImageId, name, cuisines, rating}= resData.data;
    let img = CDN_URL+cloudinaryImageId;
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

  export default RestaurantCard