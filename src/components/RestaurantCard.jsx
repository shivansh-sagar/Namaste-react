import { CDN_URL } from "../utils/constant";
import "../style/RestaurantCard.css";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  const { text, dark, light, card } = useContext(UserContext);
  console.log(text);
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
  let img = CDN_URL + cloudinaryImageId;

  return (
    <div
      className={`  res-card  text-gray-500 hover:bg-purple-50 transition-all hover:scale-105 `}
    >
      <div className="res-img">
        <img className="res-logo" src={img} loading="lazy" alt="food-logo" />
      </div>
      <div className="ml-8">
        <h3 className="text-xl">{name}🍲 </h3>
        <details>
          <summary>{cuisines.slice(0, 2).join(", ")}</summary>
          <p>{cuisines.slice(2).join(", ")}</p>
        </details>
        <span>{avgRating}</span>
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export const isVeg = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="">
        <label className=" absolute bg-black text-white mx-2 p-2  rounded-md">
          Pure Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
