import { CDN_URL } from "../utils/constant";
import "../style/RestaurantCard.css"


const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
  let img = CDN_URL + cloudinaryImageId;

  return (

    <div className="res-card hover:bg-purple-50">
      <div className="res-img">
        <img className="res-logo"
          src={img} loading="lazy" alt="food-logo" />
      </div>
      <div className="ml-8">
        <h3 className="text-xl">{name}🍲 </h3>
        <details><summary>{cuisines.slice(0, 2).join(", ")}</summary><p>{cuisines.slice(2).join(", ")}</p></details>
        <span>{avgRating}</span>
      </div>
    </div>
  );
};

export const isVeg = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white mx-2 p-2  rounded-md">Pure Veg</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard