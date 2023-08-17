import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import "../style/RestaurantMenu.css"
import { AiFillStar } from 'react-icons/ai'
import { MdRestaurantMenu } from 'react-icons/md'
import Restaurantcategory from "./RestaurantCategory";
import { useState } from "react";


const dummy = 'https://image.freepik.com/free-vector/food-logo-design_139869-254.jpg';

const ResturantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestrauntMenu(resId)

    const info = resInfo?.cards[0]?.card?.card?.info;
   
    const categories =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((ctg) =>
            ctg.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    console.log(categories)
    
    const[showIndex, setShowIndex]= useState(1)

    return resInfo === null ? (
        <Shimmer />
    ) : (<>
        {/* Top banner */}
        <div className="ResturantMain-cont">

            <img className="ResturantMenu-img" src={info.cloudinaryImageId ? CDN_URL + info.cloudinaryImageId : dummy} alt="" />

            <div className="ResturantMenu-txt">
                <span>
                    <h1 className="ResMenuName">{info.name}</h1>
                    <p className="ResMenu-Rating"><span><AiFillStar /></span>{info.avgRating}</p>
                </span>
                <img className="myimg" src={info.cloudinaryImageId ? CDN_URL + info.cloudinaryImageId : dummy} />
            </div>
        </div>

        {/* Middle Menu  */}
        <div className="Menu-cuisines">
            <h2 className="ResMenu-Menu"><MdRestaurantMenu />Menu</h2>
            <i> Our cuisines items</i>
            {info.cuisines.map((item, id) => <p>{id + 1} {item}</p>)}
        </div>
        
        

        {/* catagories accodions */}
        <div className="flex flex-col align-middle"> { categories.map((category, index)=>
        (
            <Restaurantcategory key={category?.card?.card.title}
             data={category?.card?.card}
             showItem={index === showIndex?true :false}
             setShowIndex={()=>setShowIndex(index)}
             />
        ))}
        </div>
       

    </>
    )
}
export default ResturantMenu