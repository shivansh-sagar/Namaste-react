import { useContext, useState } from "react"
import "../style//Footer.css"
import UserContext from "../utils/UserContext"
const Footer = (props) => {
    const { loggedInUser } = useContext(UserContext)
    const {theme} = useContext(UserContext)
    
    
   
    
    return (
        <>

            <div className={`${theme} footer-container flex
             justify-evenly p-5  border-t-2 border-green-500`}>
                <div className="flex items-center flex-col">
                    <p className="">contact</p>
                    <p>email</p>
                    <p>social links</p>
                </div>
                <div>
                    <h1>{loggedInUser}</h1>
                   
                </div>
                
            </div>
        </>
    )
}
export default Footer