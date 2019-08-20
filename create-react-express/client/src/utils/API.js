import axios from "axios";


const API = {
    signUp: function (user) {
    axios.post("/api/signup", {
      email: user.email,
      password: user.password
    }).then(function(data) {
      console.log(data)
    }).catch(err=>console.log(err));
}
}

export default API;


