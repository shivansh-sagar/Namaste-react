import { useContext, useState } from "react"
import "../style//Footer.css"
import UserContext from "../utils/UserContext"
const Footer = () => {
    const { loggedInUser } = useContext(UserContext)
    const {dark, light} = useContext(UserContext)
    const [togglemode, setToggleMode] =useState(light);
    const handleclick=()=>{
        if(togglemode==light){
            setToggleMode(dark)
        }
        else{
            setToggleMode(light)
        }
    }
    return (
        <>

            <div className={`${togglemode} footer-container flex
             justify-evenly p-5  border-t-2 border-green-500`}>
                <div className="flex items-center flex-col">
                    <p className="">contact</p>
                    <p>email</p>
                    <p>social links</p>
                </div>
                <div>
                    <h1>{loggedInUser}</h1>
                    <button className="bg-yellow-400" onClick={handleclick}>mode</button>
                </div>
                
            </div>
        </>
    )
}
export default Footer