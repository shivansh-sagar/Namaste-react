import React from "react"

class userclass extends React.Component{
    constructor(props){
       super(props) 

       this.state = {
        userInfo :{
            name : "dummy",
            location: "default",
        },
       }
    //    console.log(this.props.name+" child constructor")
    }

    async componentDidMount(){
        // console.log(this.props.name+" child Component did mount")
        const data = await fetch("https://api.github.com/users/shivansh-sagar");
        const json = await data.json();
        console.log(json)

        this.setState({
            userInfo:json
        })
    }
    
    render(){
        const {name , location, blog} = this.state.userInfo

        // console.log(this.props.name+" child render")
        return(
            <div className="User-card">
            <h2>Name:{name}</h2>
            <h3>{location}</h3>
            <h4>{blog}</h4>
        </div>
        )
    }
    
}
export default userclass;