var db = require("../models");

module.exports = function(app) {


    app.get("/api/results", function(req, res) {
        // var query = {};
        // if (req.query.author_id) {
        //   query.AuthorId = req.query.author_id;
        // }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Author
        db.Results.findAll({
        //   where: query,
          include: [db.Group]
        }).then(function(dbResults) {
          res.json(dbResults);
        });
      });

      
      app.delete("/api/results/:id", function(req, res) {
        db.Results.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(dbResults) {
          res.json(dbResults);
        });
      });

      app.put("/api/results", function(req, res) {
        db.Results.update(
          req.body,
          {
            where: {
              id: req.body.id
            }
          }).then(function(dbResults) {
          res.json(dbResults);
        });
      });

}