// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require("../config/middleware/isAuthenticated");
const isAuthenticated = require("../config/middleware/isAuthenticared");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/landing.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/results/:code?", (req,res)=> {
    res.sendFile(path.join(__dirname, "../public/restaurant1.html"));
  })

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/creategroup", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/creategroup.html"));
  });

  app.get("/joingroup", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/joingroup.html"));
  });

  //html routes for restaurant pages
  app.get("/restaurant1", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurant1.html"));
  });

  app.get("/restaurant2", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurant2.html"));
  });

  app.get("/restaurant3", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurant3.html"));
  });

  app.get("/restaurant4", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurant4.html"));
  });

  app.get("/restaurant5", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurant5.html"));
  });

  app.get("/restaurant6", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurant6.html"));
  });

  app.get("/restaurant7", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurant7.html"));
  });

  app.get("/restaurant8", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurant8.html"));
  });

  app.get("/restaurant9", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurant9.html"));
  });

  app.get("/restaurant10", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/restaurant10.html"));
  });
};
