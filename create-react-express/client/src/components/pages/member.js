import React from "react";
import API from "./../../utils/API";
import Pinput from "./../pinput/pinput";

const pStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  };

class member extends React.Component{

state = {
    user: {email: "Stranger"},
    projects: []
}

projectSubmit = proj =>{
    console.log(proj)
    API.addProject(proj).then(data=>{
        console.log(data)
    }).catch(err=>{throw err})
}

componentDidMount(){
    if(this.props.user){
        console.log(this.props.user)
        this.setState({user:this.props.user})
        {API.getProject(this.props.user.email).then(projects => {
            console.log(projects)
            this.setState({projects: projects})
        })
    }
}
}

componentDidUpdate(){
    console.log(this.state.projects)
}

    render()
    {
            return (
                <div   style={pStyle} >
                <h1>Welcome {this.state.user.email}!</h1>
                <Pinput projectSubmit = {this.projectSubmit} email ={this.state.user.email}></Pinput>

                </div>
                
            )
    }
}



export default member