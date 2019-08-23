import React, { Component } from "react";
import "./App.css";
import Nav from "./components/navtab";
import API from "./utils/API.js";
import {
  BrowserRouter as Router,
  Route,
  Switch
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
    auth: false,
    projects: []
  };

  componentDidMount = ()=>{
    API.getUser().then(user=>{
        this.setState({user:user})
      console.log(this.state.user)
      }).catch(err=>{
        console.log(err)
      })

      API.getProjects().then(projects=>{
        this.setState({projects:projects})
      }).catch(err=>{
        console.log(err)
      })
  }

  login = user => {
    return API.login(user).then(loggedInUser => {
      console.log(loggedInUser)
      this.setState({ user: loggedInUser });
      return loggedInUser;
    }).catch(err=>{
      console.log(err);
      throw err
    });
  };

  SignUp = user => {
    return API.signUp(user).then(loggedInUser => {
      alert(loggedInUser)
      this.setState({ user: loggedInUser });
      return loggedInUser;
    }).catch(err=>{
      console.log(err)
      throw err
    })
    ;
  };

  

  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={props=> <Landing {...props} projects={this.state.projects}/>} />
            <Route exact path="/signup" component={props => <SignUp {...props} handleSignUp={this.SignUp} user={this.state.user} />} />
            <Route exact path="/login" component={props => <Login {...props} loginHandler={this.login} user={this.state.user} />} />
            <Route exact path="/member" component={props => <Member {...props} user={this.state.user} />} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
