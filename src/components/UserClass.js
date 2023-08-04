import React from "react"

class userclass extends React.Component{
    constructor(props){
       super(props) 

       this.state = {
        count : 0,
        count2 : 1
       }
       console.log(this.props.name+" child constructor")
    }

    componentDidMount(){
        console.log(this.props.name+" child Component did mount")
    }
    
    render(){
        const {name}=this.props;
        const {count,count2}=this.state
        console.log(this.props.name+" child render")
        return(
            <div className="User-card">
                <h1>Count={count}</h1>
                <h1>Count2={count2}</h1>
                <button onClick={()=>{
                    this.setState(
                        { count: this.state.count + 1 , count2: this.state.count2 +2}
                        
                    )

                }}>Count Increase</button>
            <h2>Name:{name}</h2>
            <h3>Location: sultanpur</h3>
            <h4>Contact: @shivansh</h4>
        </div>
        )
    }
    
}
export default userclass;