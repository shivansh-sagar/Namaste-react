import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";



const ResturantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

const {resId} = useParams();
console.log(resId)


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
           MENU_API+resId
        );

        const json = await data.json();
        console.log(json)
        setResInfo(json.data);
    }


    const info = resInfo?.cards[0]?.card?.card?.info;
    const menu = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    const menu2 = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    
    console.log(menu)
    console.log(menu2)

    return resInfo === null ? (
        <Shimmer />
    ) : (<>
        <div className="ResMenuContainer">
            <div>
                <h1 className="ResMenuName" >{info.name}</h1>
                <p>Avg rating: {info.avgRating}</p>
            </div>
            <img className="myimg" src={CDN_URL + info.cloudinaryImageId} />
        </div>
        <div>
            <h2>Menu</h2>
            <i>{info.availabilityServiceabilityMessage}</i>


            {info.cuisines.map((item, id) => <p>{id + 1} {item}</p>)}
        </div>
        <div>
            
                <div className="MenuItems">
                    {menu.map(item => <div className="MenuItemList" key={item.card.info
                        .id}>
                            <div className="MenuItems-name">
                            <p>{item.card.info.name}</p>
                            <p>{item.card.info.description}</p>
                            </div>
                            <hr/>
                            <h4>{"Rs"+" "}{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</h4>
                            <img className="MenuItems-img" src={CDN_URL+ item.card.info.imageId} />
                        </div>)}

                </div>
                
               

        </div>

    </>
    )
}
export default ResturantMenu