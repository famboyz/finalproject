import React from "react";
import API from "./../../utils/API";
import Pinput from "./../pinput/pinput";
import Pbutton from "./../pbutton/pbutton";

const pStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  };

class member extends React.Component{

state = {
    user: {email: "Stranger"}
}

componentWillMount(){
    if(this.props.user){
        console.log(this.props.user)
        this.setState({user:this.props.user})
    }
}

    render()
    {
            return (
                <div   style={pStyle} >
                <h1>Welcome {this.state.user.email}!</h1>
                <Pinput></Pinput>

                </div>
                
            )
    }
}



export default member