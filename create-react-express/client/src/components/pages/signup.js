import React from "react";
import API from "./../../utils/API"
import Input from "./../inputs/input";

<<<<<<< HEAD
function signup(){
   return (
       <>
     <Dialogue></Dialogue>
       </>
   )
}
export default signup
=======

class Signup extends React.Component{
state = {
    user: null
}
handleSignUp =(user)=>{
    console.log("handing signup")
    API.signUp(user).then(route => 
        window.location.replace(route))
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
>>>>>>> origin/master
