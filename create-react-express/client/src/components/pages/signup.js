import React from "react";
import API from "./../../utils/API"
import Input from "./../inputs/input";


class Signup extends React.Component{
state = {
    user: null
}

componentDidMount=()=>{
    if(this.props.user){
        this.setState({user:this.props.user})
        window.location.replace("/member")
    }
}

handleSignUp =(user)=>{
    console.log("handing signup")
    this.props.handleSignUp(user).then(result=>{
        window.location.replace("/member")
    }).catch(err=>{
        alert(`SIGNUP ERROR - ${err}`)
        window.location.replace('/signup')
    })
}


    render(){
        return (
        <>
        <Input handleSignUp={this.handleSignUp} type="signup"></Input>
        </>
    )
    }
    
}

export default Signup
