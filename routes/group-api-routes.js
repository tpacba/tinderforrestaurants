const db = require("../models");
// const passport = require("../config/passport");

module.exports = function(app) {

    app.get("/api/group", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.User
        db.Group.findAll({
          include: [db.User]
        }).then(function(dbGroup) {
          res.json(dbGroup);
        });
      });

    // app.get("/api/group/:id", function(req, res) {
    //     // Here we add an "include" property to our options in our findOne query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Post
    //     db.Group.findOne({
    //       where: {
    //         id: req.params.id
    //       },
    //       include: [db.User]
    //     }).then(function(dbGroup) {
    //       res.json(dbGroup);
    //     });
    //   });


    app.post("/api/group", function(req, res) {
        db.Group.create(req.body).then(function(dbGroup) {
          res.json(dbGroup);
        });
        });

    app.delete("/api/group/:id", function(req, res) {
        db.Group.destroy({
            where: {
                id: req.params.id
              }
        }).then(function(dbGroup) {
            res.json(dbGroup);
        });
    });


}

    


