
import { AiFillCaretDown } from "react-icons/ai"

import Itemlist from "./ItemList"
import { useState } from "react"
const Restaurantcategory = ({ data }) => {
    const [ showItem, setShowItem]= useState(false)
    const handleClick=()=>{
        if(showItem==false){
            setShowItem(true)
        }
        else{
            setShowItem(false)
        }
    }
    
    return (
        <div className="bg-gray-100 w-8/12 shadow-lg m-auto my-4 p-4">
            <div className="flex  justify-between cursor-pointer" onClick={handleClick}>
                <span className=" font-bold text-md" >{data.title} ({data.itemCards.length})</span>
                <span className="mt-1"><AiFillCaretDown /></span>
            </div>

            {showItem &&< Itemlist item={data.itemCards} />}
        </div>
    )
}
export default Restaurantcategory