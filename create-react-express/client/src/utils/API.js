import axios from "axios";


const API = {
    signUp: function (user) {
    return axios.post("/api/signup", {
      email: user.email,
      password: user.password
    }).then(function(data) {
      console.log(data)
      return data.data;
    }).catch(err=> {
      console.log(err);
      throw err;
    });
},
login: function (user){
  return axios.post("/api/login", {
    email: user.email,
    password: user.password
  }).then(function(data){
    return data.data
  }).catch(function(err) {
      console.log(err);
      throw err;
})
},
addProject: function (project){
  return axios.post("/api/project/create", {
    project
  }).then(data=> {return data}).catch(err=>{
    console.log(err)
    throw err})
},
getUser: function(){
  return axios.get("/api/user").then(user=>{
    return user.data
  }).catch(err=>{
    console.log(err)
    throw err
  })
},
getProject: function(user){
  return axios.get("/api/project/"+user).then(project=>{
    return project.data
  }).catch(err=>{
    console.log(err)
    throw err
  })
},
getProjects: function(){
  return axios.get("/api/projects").then(projects => {
    return projects.data
  }).catch(err=>{
    console.log(err)
    throw err
  })
},
getProjectCat: function(category){
  return axios.get("/api/projects/"+category).then(projects => {
    return projects.data
  }).catch(err=>{
    console.log(err)
    throw err
  })
}
}

export default API;


