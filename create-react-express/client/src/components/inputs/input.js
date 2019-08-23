import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  input: {
    margin: theme.spacing(1)
  },
      button: {
      margin: theme.spacing(1)
    },
}));

const pStyle = {
  position: "absolute",
  left: "40%",
  top: "50%",
  transform: "translate(-50%, -50%)"
};
const pStyle2 = {
  position: "absolute",
  left: "60%",
  top: "50%",
  transform: "translate(-50%, -50%)"
};
  
  const bStyle = {
    position: "absolute",
    left: "50%",
    top: "65%",
    transform: "translate(-50%, -50%)"
  };

class Inputs extends React.Component {
    state = {
        classes: useStyles
    }

    handleChange = event =>{
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("submitting")
        if (this.props.type === "login"){
          this.props.handleLogin({email: this.state.email, password: this.state.password})
        }else{
          this.props.handleSignUp({email: this.state.email, password: this.state.password})
        }
    }

  render(){
      return (
    <div className={this.state.classes.container}>
      <TextField
        style={pStyle}
        id="outlined-email-input"
        label="Email"
        className={this.state.classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        onChange={this.handleChange}
      />
      <TextField
        style={pStyle2}
        id="outlined-password-input"
        label="Password"
        className={this.state.classes.textField}
        type="password"
        name="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={this.handleChange}
      />
      <Button
        style={bStyle}
        variant="contained"
        color="primary"
        className={this.state.classes.button}
        onClick = {(e)=> this.handleSubmit(e)}
      >
        {this.props.type==="login"? "Log In":"Sign Up"}
      </Button>
    </div>
      )
  }
}

export default Inputs
