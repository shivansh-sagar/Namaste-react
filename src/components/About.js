import User from "./User";
import React from "react";
import UserClass from "./UserClass";


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
                <h1>About</h1>
                <h2>This is about </h2>
                <User/>
                <UserClass name={"shivanshu sagar (class)"} />
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