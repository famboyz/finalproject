// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticatedAdmin = require("../config/middleware/isAuthenticatedAdmin");

module.exports = function(app) {

  app.get("/sign-up", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user && req.user.role === "Admin") {
      return res.redirect("/admin");
    }
    if (req.user) {
      return res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../views/signup.html"));
  });

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user && req.user.role === "Admin") {
      return res.redirect("/admin");
    }
    if (req.user) {
      return res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../views/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/admin", isAuthenticatedAdmin, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/admin.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });

};
