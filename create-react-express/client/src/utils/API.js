import axios from "axios";


const API = {
    signUp: function (user) {
    return axios.post("/api/signup", {
      email: user.email,
      password: user.password
    }).then(function(data) {
      return data.data;
    }).catch(err=>console.log(err));
},
login: function (user){
  return axios.post("/api/login", {
    email: user.email,
    password: user.password
  }).then(function(data){
    return data.data
  }).catch(function(err) {
      console.log(err);
})
},
addProject: function (project){
  return axios.post("/api/project/create", {
    title: project.title,
    description: project.description
  })
}
}

export default API;


