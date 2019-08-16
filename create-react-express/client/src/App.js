import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/navtab";
import Card from "./components/card";
import Grid from "@material-ui/core/Grid";
// import { spacing } from '@material-ui/system';

// const theme = {
//   spacing: [10,20,30]
// }

function App() {
  return (
    <div>
      <Nav />
      <Grid container direction="row" justify="center" alignItems="center" >
        <Card />
        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </div>
  );
}

export default App;
