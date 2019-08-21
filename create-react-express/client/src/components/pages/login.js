import React from "react";
import API from "./../../utils/API";
import Input from "./../inputs/input";

class Login extends React.Component {
  state = {
    user: null
  };
  handleLogin = user => {
    console.log("handing login");
    API.login(user).then(route => {
      window.location.replace("/member");
    });
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
