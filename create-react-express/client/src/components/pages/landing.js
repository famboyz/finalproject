import React from "react";
import Card from "./../card";
import Grid from "@material-ui/core/Grid";

class Landing extends React.Component{
  state={
    projects:[]
  }

  componentDidMount(){
    console.log(this.props.projects)
    this.setState({projects:this.props.projects})
  }

  render(){
    return(
      <Grid container direction="row" justify="center" alignItems="center" >
        {this.state.projects.map(project=>{
          return (
            <Card info={project}/>
          )
        })}
      </Grid>  
    )
  }
    
}

export default Landing
