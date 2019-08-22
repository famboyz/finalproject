import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



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


export default class OutlinedTextFields extends React.Component {
  state={
    classes : useStyles
  }

  handleSubmit = () =>{
    this.props.projectSubmit({title:this.state.Title, description:this.state.Description, link: this.state.Link, email: this.props.email})
  }

  handleChange =event=>{
    const {name, value} = event.target
    this.setState({[name]:value})
    console.log(this.state)
  };

render(){
  return (
    <div>
    <form className={this.state.classes.container} noValidate autoComplete="off">


    <TextField
        id="outlined-uncontrolled"
        label="Title"
        name="Title"
        defaultValue=""
        className={this.state.classes.textField}
        margin="normal"
        variant="outlined"
        onChange={this.handleChange}
      />

    <TextField
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

<TextField
        id="outlined-multiline-static"
        label="Link"
        name="Link"
        multiline
        rows="4"
        defaultValue=""
        className={this.state.classes.textField}
        margin="normal"
        variant="outlined"
        onChange={this.handleChange}
      />

    </form>
    <input
        accept="image/*"
        className={this.state.classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={this.state.classes.button}>
          Project Image
        </Button>
      </label>

      <Button variant="contained" color="primary" className={this.state.classes.button} onClick={this.handleSubmit}>
        Upload
      </Button>
    </div>
    
  );
}
  
}
