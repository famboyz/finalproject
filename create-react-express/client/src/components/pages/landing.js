import React from "react";
import Card from "./../card";
import Grid from "@material-ui/core/Grid";

function Landing(){
    return(
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
    )
}

export default Landing
