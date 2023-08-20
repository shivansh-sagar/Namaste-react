
import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import { Consumer } from "react";


class About extends React.Component {
    constructor(props){
        super(props)

        // console.log("parent constructor")
    }
    componentDidMount(){
    //     console.log("parent component did mount")
     }
    render() {
        // console.log("parent render")
        return (
            <div>
                <UserClass name={"shivanshu sagar (class)"} />
                <h1>About</h1>
                <div>
                    
                    <UserContext.Consumer>
                        {({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is about </h2>
                
                
            </div>
        )
    }
}

// const About= () =>{
//     return (
//        
//     )
// }

export default About