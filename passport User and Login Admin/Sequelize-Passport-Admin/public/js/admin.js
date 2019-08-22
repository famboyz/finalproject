$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/admin_data").then(function(data) {
    var emails = [];
    for(var i = 0; i < data.length; i++) {
      emails.push(data[i].email);
    }
    $(".member-names").text(emails.join(", "));
  });
});
