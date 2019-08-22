// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var isNotAuthenticated = require("../config/middleware/isNotAuthenticated");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/login", isNotAuthenticated, function(req, res) {
    console.log("login");
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/member", isAuthenticated, function(req, res) {
    console.log("member");
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

};
