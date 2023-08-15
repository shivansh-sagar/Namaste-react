import { BsFillCircleFill } from "react-icons/bs"
import { CDN_URL } from "../utils/constant";

const Itemlist = ({ item }) => {

    const dummy = 'https://image.freepik.com/free-vector/food-logo-design_139869-254.jpg';
    return (
        <div className="">
            {item.map((item) => (
                <div className=" MenuItemList m-2 p-2  flex  items-center border-b-4   sm:flex-row border-purple-500 md:border-green-500 flex-col  lg:border-green-500" key={item.card.info.id}>

                    <img className="MenuItems-img" src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : dummy} />


                    <div className="w-full">
                        <span>{item.card.info.itemAttribute.vegClassifier == "VEG" ? <span className=" bg-green-500 text-green-500 text-xs md:text-sm "><BsFillCircleFill /></span> : <span className=" nonveg text-xs text-red-600"><BsFillCircleFill /></span>}</span>
                        <p className=" font-bold">{item.card.info.name}</p>
                        <span className="text-sm">₹  {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                        {/* <p>{item.card.info.isBestseller}</p> */}
                        <p className=" text-xs text-slate-500 md:text-sm">{item.card.info.description}
                        </p>
                        <button className=" bg-green-300  p-2 my-2 mx-1/2 w-1/2 ">add</button>
                    </div>
                    {/* veg filter */}
                    
                </div>
            ))}
        </div>
    )
}
export default Itemlist