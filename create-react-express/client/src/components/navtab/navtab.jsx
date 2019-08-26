import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Drawer from '../drawer';
import logo from './logo.jpg';






function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={4}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(4);

  function handleChange(event, newValue) {
    setValue(newValue);
    props.param(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
          
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          
        >
                      
                      
          <LinkTab label="Coding" {...a11yProps(0)} />
          
          <LinkTab label="UI-UX" {...a11yProps(1)} />
          <LinkTab label="Data Analytics" {...a11yProps(2)} />
          <LinkTab label="Cyber Security" {...a11yProps(3)} />
          <LinkTab label="All" {...a11yProps(4)} />

          <Drawer></Drawer> 

          
        </Tabs>


      </AppBar>
    </div>






  );
}
