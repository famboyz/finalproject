import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));


var divStyle = {
  position: 'absolute', left: '50%', top: '50%',
  transform: 'translate(-50%, -50%)'
};

var divTitle = {
  position: 'absolute', left: '50%', top: '40%',
  transform: 'translate(-50%, -50%)'
};
var divCat = {
  position: 'absolute', left: '50%', top: '75%',
  transform: 'translate(-50%, -50%)'
};
var divDesc = {
  position: 'absolute', left: '50%', top: '50%',
  transform: 'translate(-50%, -50%)'
};

var divLink = {
  position: 'absolute', left: '44%', top: '60%',
  // transform: 'translate(-50%, -50%)'
};

var divButton = {
  position: 'absolute', left: '50%', top: '80%',
  transform: 'translate(-50%, -50%)'
};

export default class OutlinedTextFields extends React.Component {
  state={
    classes : useStyles
  }

  handleSubmit = () =>{
    this.props.projectSubmit({title:this.state.Title, description:this.state.Description, link: this.state.Link, email: this.props.email, category: this.state.cat})
  }

  handleChange =event=>{
    const {name, value} = event.target
    this.setState({[name]:value})
    console.log(this.state)
  };

render(){
  return (
    <div >
    <form className={this.state.classes.container} noValidate autoComplete="off">

<div >
    <TextField style={divTitle}
        id="outlined-uncontrolled"
        label="Title"
        name="Title"
        defaultValue=""
        className={this.state.classes.textField}
        margin="normal"
        variant="outlined"
        onChange={this.handleChange}
      />
      <InputLabel htmlFor="cat-native-helper" style={divCat}></InputLabel>
        <NativeSelect style={divCat}
          value={this.state.cat}
          onChange={this.handleChange}
          input={<Input name="cat" id="cat-native-helper" />}
        >
          <option value="" />
          <option value={"Coding"}>Coding</option>
          <option value={"UX-UI"}>UX-UI</option>
          <option value={"Data Analytics"}>Data Analytics</option>
          <option value={"Cyber Security"}>Cyber Security</option>
        </NativeSelect>

    <TextField style={divDesc}
        id="outlined-multiline-static"
        label="Description"
        name="Description"
        multiline
        rows="4"
        defaultValue=""
        className={this.state.classes.textField}
        margin="normal"
        variant="outlined"
        onChange={this.handleChange}
      />

<TextField style={divLink}
        id="outlined-multiline-static"
        label="Link"
        name="Link"
        multiline
        rows="2"
        defaultValue=""
        className={this.state.classes.textField}
        margin="normal"
        variant="outlined"
        onChange={this.handleChange}
      />
</div>
    </form>

  

      <Button style={divButton} variant="contained" color="primary" className={this.state.classes.button} onClick={this.handleSubmit}>
        Upload
      </Button>
      
    </div>
    
  );
}
  
}
