const db = require("../models");
module.exports = function(app) {
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).then(function(results) {
     return res.json(results);
    })
    .catch(function(error){
     return res.json(error)
    })
  });

  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(results) {
     return res.json(results);
    })
    .catch(function(error){
     return res.json(error)
    })
  });

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(test => {
        res.json(test);
      })
      .catch(err => {
        res.json(err);
      });
  });
  //   app.put("/api/workouts", function(req, res) {
  //     console.log(req.body);
  //     db.Workout.create({
  //       burger_name: req.body
  //     }).then(function(data) {
  //       res.json(data);
  //     });

  // });
};