<<<<<<< HEAD
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Build from '@material-ui/icons/Build';
import './drawer.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import SvgIcon from '@material-ui/core/SvgIcon';

=======
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Build from "@material-ui/icons/Build";
import Dialogue from "./../dialogue";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./drawer.css";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

import SvgIcon from "@material-ui/core/SvgIcon";

import API from "./../../utils/API";
>>>>>>> origin/master

const useStyles = makeStyles({
  list: {
    width: 250
    // backgroundColor: theme.palette.background.paper,
  },
  fullList: {
    width: "auto"
  }
});

const pStyle = {
  fontSize: "45px"
};

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    bool: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <Link to="/login">
          <ListItem button key="Login">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </Link>
        <Link to="/signup">
          <ListItem button key="Signup">
            <ListItemIcon>
              <Build />
            </ListItemIcon>
            <ListItemText primary="Signup" />
          </ListItem>
        </Link>
        
      </List>
      <Divider />
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Divider />
    </div>
  );

  return (
    <div>
      <MenuRoundedIcon style={pStyle} onClick={toggleDrawer("right", true)}>
        Account
      </MenuRoundedIcon>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}
