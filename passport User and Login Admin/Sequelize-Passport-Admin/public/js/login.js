$(document).ready(function() {
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  function resetErrorDisplay() {
    $("#alert").hide();
  }
  emailInput.on("keyup", resetErrorDisplay);
  passwordInput.on("keyup", resetErrorDisplay);

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      
      // data.redirect contains the string URL to redirect to
      window.location.replace(data);
      emailInput.val("");
      passwordInput.val("");
      // If there's an error, log the error
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text("Invalid username or password.");
    $("#alert").fadeIn(500);
  }

});
