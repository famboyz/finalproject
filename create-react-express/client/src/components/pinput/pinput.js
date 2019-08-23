import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



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


export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };


  const [anchorEl, setAnchorEl] = React.useState(null);


function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <React.Fragment>


    <form className={classes.container} noValidate autoComplete="off">


    <TextField
        id="outlined-uncontrolled"
        label="Title"
        defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />

<TextField
        id="outlined-multiline-static"
        label="Description"
        multiline
        rows="4"
        defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />


<TextField
        id="outlined-uncontrolled"
        label="URL"
        defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
    </form>

    <div>

   
    <input
      accept="image/*"
      className={classes.input}
      id="contained-button-file"
      multiple
      type="file"
    />
   

   
  </div>


  <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
Select Category      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Coding</MenuItem>
        <MenuItem onClick={handleClose}>UI/UX</MenuItem>
        <MenuItem onClick={handleClose}>Data Analytics</MenuItem>
        <MenuItem onClick={handleClose}>Cyber Security</MenuItem>

      </Menu>
    </div>

    <Button variant="contained" color="primary" className={classes.button}>
      Upload Project
    </Button>
    </React.Fragment>

  );
}
