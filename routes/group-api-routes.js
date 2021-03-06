const db = require("../models");
// const passport = require("../config/passport");
const axios = require("axios");
// axios.defaults.headers.common = {
//   'Authorization': `Bearer ${process.env.apikey}`
// }

module.exports = function (app) {

  app.get("/api/group", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.Group.findAll({
      include: [db.User]
    }).then(function (dbGroup) {
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


  app.post("/api/group", function (req, res) {
    db.Group.create({ ...req.body, email: req.user.email, UserId: req.user.id }).then(function (dbGroup) {

      var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?limit=30&location=" + req.body.city + "&locale=it_IT&categories=" + req.body.category + "&price=" + req.body.price + "&term=restaurant";

      axios.get(queryURL, {
        headers: {
          "Authorization": `Bearer ${process.env.apikey}`,
          "Content-Type": 'application/x-www-form-urlencoded',
          "X-Requested-With": "XMLHttpRequest"
        }
      })
        .then(async function ({data:{businesses}}) {

          console.log(businesses[0]);

          for (var i = 0; i < businesses.length; i++) {
            await db.Results.create({
              restaurant: businesses[i].name,
              image: businesses[i].image_url,
              price: businesses[i].price || "$",
              rating: businesses[i].rating,
              url: businesses[i].url,
              matches: false,
              GroupId: dbGroup.id,
              group:dbGroup.email
            })
          }

          res.json(dbGroup);
        });

    })
  })

app.delete("/api/group/:id", function (req, res) {
  db.Group.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbGroup) {
    res.json(dbGroup);
  });
});

app.get("/api/results/:code", ({params:{code}}, res) => {
    db.Group.findOne({where:{code}, include: db.Results})
    .then(({dataValues:results}) => res.json(results.Results.splice(0,10)))
})


}

