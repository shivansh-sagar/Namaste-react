import { Link } from "react-router-dom";
import "../style/Home.css"
const Home= ()=>{
    return(
        <>
        <div className="main flex flex-col items-center ">
            <div className=" absolute text-xl border border-red-300" >
                <h1 className=" text-white">let</h1>
                <h1>Dive Deep</h1>
                <h1>In the world of</h1>
                <h1>Food</h1>
                <span><Link className="" to="/res">restaurant</Link></span>
            </div>
            <img className=" w-full h-full object-cover" src="https://th.bing.com/th/id/R.48a7774b5aff470913a9beff75ded1bd?rik=ZZWqMTe4WeVjmQ&riu=http%3a%2f%2fmedia.giphy.com%2fmedia%2fWBTUlyKBVlTTa%2fgiphy.gif&ehk=R0lCnRKMaR1zKyOwQa4qV3UGt8MMpd2COP44C3MrWy0%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
        </>
    )
}
export default Home;