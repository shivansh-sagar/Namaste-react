import { Link } from "react-router-dom";
import {BsArrowReturnRight} from 'react-icons/bs'
import "../style/Home.css"
const Home= ()=>{
    return(
        <>
        <div className="main flex flex-col items-center mb-5 p-5 h-full ">
            <div className=" text-5xl" >
                <h1 className="">let</h1>
                <h1>Dive Deep</h1>
                <h1>In the world of</h1>
                <h1 className="mb-5">Food</h1>
                <span><BsArrowReturnRight></BsArrowReturnRight><span className=" bg-green-400 rounded-lg uppercase p-2"><Link className="" to="/res">restaurant</Link></span></span>
            </div>
            
        </div>
        </>
    )
}
export default Home;