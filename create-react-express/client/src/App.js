import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/navtab";
import API from "./utils/API.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Landing from "./components/pages/landing.js";
import SignUp from "./components/pages/signup.js";
import Member from "./components/pages/member.js";
import Login from "./components/pages/login.js";
// import { spacing } from '@material-ui/system';

// const theme = {
//   spacing: [10,20,30]
// }

class App extends Component {
  state = {
    user: null,
    auth: false
  };

  componentDidUpdate = () => {
    if (this.state.user) {
      this.setState({ auth: true });
    }
  };

  signUp = user => {
    this.setState({ user: API.signUp(user) });
  };
  login = user => {
    this.setState({ user: API.login(user) });
  };

  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/member" component={Member} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
