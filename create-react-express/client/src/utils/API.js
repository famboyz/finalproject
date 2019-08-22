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
    title: project.title,
    description: project.description
  })
},
getUser: function(){
  return axios.get("/api/user").then(user=>{
    return user.data
  }).catch(err=>{
    console.log(err)
    throw err
  })
}
}

export default API;


