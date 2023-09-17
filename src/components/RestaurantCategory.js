
import { AiFillCaretDown } from "react-icons/ai"
import {BiSolidUpArrow} from "react-icons/bi"
import '../style/RestaurantCategory.css'
import Itemlist from "./ItemList"
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";

const Restaurantcategory = ({ data, showItem, setShowIndex }) => {
    
   
    const{theme,card}= useContext(UserContext);
  
    const handleClick=()=>{
        setShowIndex();
}
    return (
        <div className={`w-8/12 dropdownList shadow-lg m-auto my-4 p-4`}>
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className=" font-bold text-md" >{data.title} ({data.itemCards.length})</span>
                <span className="mt-1 text-sm">{showItem==true ? <BiSolidUpArrow/> :<AiFillCaretDown/>}</span>
            </div>

            {showItem &&<Itemlist item={data.itemCards} />}
        </div>
    )
}
export default Restaurantcategory