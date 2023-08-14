import { AiFillCaretDown } from "react-icons/ai"
import Itemlist from "./ItemList"
const Restaurantcategory = ({ data }) => {
    
    return (
        <div className="bg-gray-100 w-8/12 shadow-lg m-auto my-4 p-4">
            <div className="flex  justify-between  ">
                <span className=" font-bold text-md" >{data.title} ({data.itemCards.length})</span>
                <span className="mt-1"><AiFillCaretDown /></span>
            </div>

            <Itemlist item={data.itemCards} />
        </div>
    )
}
export default Restaurantcategory