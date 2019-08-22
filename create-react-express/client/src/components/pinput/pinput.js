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

  return (
    <div>
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
        id="outlined-multiline-static"
        label="Link"
        multiline
        rows="4"
        defaultValue=""
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />

    </form>
    <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Project Image
        </Button>
      </label>

      <Button variant="contained" color="primary" className={classes.button}>
        Upload
      </Button>
    </div>
    
  );
}
