import { useContext } from "react"
import "../style//Footer.css"
import UserContext from "../utils/UserContext"
const Footer = () => {
    const { loggedInUser } = useContext(UserContext)
    const {theme} = useContext(UserContext)
    console.log(theme)
    return (
        <>

            <div className="footer-container flex
             justify-evenly bg-slate-900 p-5 border border-t-2 text-white border--500">
                <div className="flex items-center flex-col">
                    <p className={`${theme}`}>contact</p>
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