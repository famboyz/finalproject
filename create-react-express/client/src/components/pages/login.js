import React from "react";
import API from "./../../utils/API";
import Input from "./../inputs/input";


class Login extends React.Component {
  state = {
    user: null
  };

componentDidMount=()=>{
    if(this.props.user){
        this.setState({user:this.props.user})
        window.location.replace("/member")
    }
}

  handleLogin = user => {
      this.props.loginHandler(user).then(user => {
        window.location.replace("/member");
      }).catch(err=>{
          console.log(err)
          window.location.replace("/login");
      })
  };

  

  render() {
    return (
      <>
        <Input handleLogin={this.handleLogin} type="login" />
      </>
    );
  }
}

export default Login;
