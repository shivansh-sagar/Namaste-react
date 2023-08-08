import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import "../style/RestaurantMenu.css"
import { AiFillStar } from 'react-icons/ai'
import { MdRestaurantMenu } from 'react-icons/md'


const dummy = 'https://image.freepik.com/free-vector/food-logo-design_139869-254.jpg';
const defaultTxt = "Item discription is not available"

const ResturantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestrauntMenu(resId)

    const info = resInfo?.cards[0]?.card?.card?.info;
    const menu = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    const menu2 = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

    return resInfo === null ? (
        <Shimmer />
    ) : (<>

        <div className="ResturantMain-cont">

            <img className="ResturantMenu-img" src={info.cloudinaryImageId ? CDN_URL + info.cloudinaryImageId : dummy} alt="" />

            <div className="ResturantMenu-txt">
                <span>
                    <h1 className="ResMenuName">{info.name}</h1>
                    <p className="ResMenu-Rating"><AiFillStar />{info.avgRating}</p>
                </span>
                <img className="myimg" src={info.cloudinaryImageId ? CDN_URL + info.cloudinaryImageId : dummy} />
            </div>
        </div>

        <div className="Menu-cuisines">
            <h2 className="ResMenu-Menu"><MdRestaurantMenu />Menu</h2>
            <i> Our cuisines items</i>
            {info.cuisines.map((item, id) => <p>{id + 1} {item}</p>)}
        </div>

        <div>
            <div className="MenuItems">
                {menu.map(item => <div className="MenuItemList" key={item.card.info
                    .id}>

                    <div className="MenuItems-container1">
                        <strong><p>{item.card.info.name}</p></strong>
                        <p>{item.card.info.description ? item.card.info.description : defaultTxt}</p>
                    </div>
                    <hr />

                    <div className="MenuItems-container2">
                        <h4>{"Rs" + " "}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h4>
                        <img className="MenuItems-img" src={item.card.info.imageId ? CDN_URL + item.card.info.imageId : dummy} />
                    </div>

                </div>)}
            </div>
        </div>

    </>
    )
}
export default ResturantMenu