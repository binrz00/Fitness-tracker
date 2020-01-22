const db = require("../models");
module.exports = function(app) {
  app.get("/api/range", function(req, res) {
    db.workout.findAll().then(function(results) {
      res.json(results);
    });
  });

  app.post("/api/workouts", function(req, res) {
    console.log(req.body);
    db.workout.create({
      burger_name: req.body
    }).then(function(data) {
      res.json(data);
    });
  });

    app.put("/api/workouts", function(req, res) {
      console.log(req.body);
      db.workout.create({
        burger_name: req.body
      }).then(function(data) {
        res.json(data);
      });

  });
};