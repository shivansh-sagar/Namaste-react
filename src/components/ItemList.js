import { BsFillCircleFill } from "react-icons/bs"
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem,removeItem } from "../utils/addItem";


const Itemlist = ({ item }) => {
    const dispatch = useDispatch();
    
    const dummy = 'https://image.freepik.com/free-vector/food-logo-design_139869-254.jpg';
    
    

    const handleAddItem= (item)=>{
        // Dispatch a action
        dispatch(addItem(item));
    }

    return (
        <>
            {item.map((item) => (
                <div className=" MenuItemList m-2 p-2  flex  items-center  border-b-4 flex-col  border-green-500 sm:flex-row  hover:bg-zinc-800 hover:text-white " key={item.card.info.id}>
                    <div className="flex relative flex-col w-full items-center">
                    <img className="MenuItems-img" src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : dummy} />
                    <button className="addtoCartBtn absolute bottom-0 bg-black text-white p-2 mx-1/2 " onClick={()=>handleAddItem(item)}>Add</button>

                    </div>
                
                    <div className="w-full">
                        <span>{item.card.info.itemAttribute.vegClassifier == "VEG" ? <span className=" bg-green-500 text-green-500 text-xs md:text-sm "><BsFillCircleFill /></span> : <span className=" nonveg text-xs text-red-600"><BsFillCircleFill /></span>}</span>
                        <p className=" font-bold ">{item.card.info.name}</p>
                        <span className="text-sm">₹  {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        {/* <p>{item.card.info.isBestseller}</p> */}
                        <p className=" text-xs text-slate-500 md:text-sm">{item.card.info.description}
                        </p>
                        
                    </div>
                    {/* veg filter */}
                    
                </div>
            ))}
        </>
    )
}
export default Itemlist