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

        // this.timer = setInterval(()=>{
        //     console.log("Namaste React op")
        // },1000)
        // console.log(this.props.name+" child Component did mount")
        const data = await fetch("https://api.github.com/users/shivansh-sagar");
        const json = await data.json();
       

        this.setState({
            userInfo:json
        })
    }
    componentWillUnmount(){
        // clearInterval(this.timer);
        // console.log("Component will unmount")

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