const db = require("../models");
module.exports = function(app) {
  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find().sort({$natural : -1}).limit(7).then(function(results) {
      res.json(results);
    })
    .catch(function(error){
      res.json(error)
    })
  });
  
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({}).then(function(results) {
      res.json(results);
    })
    .catch(function(error){
      res.json(error)
    })
  });
  

  
  app.put("/api/workouts/:id", (req, res) => {
 db.Workout.updateOne({
  _id: req.params.id
}
,{$set:{exercises:req.body}} , { new: true })
      .then(result => {
        console.log(result)
        res.json(result);
      })
      .catch(err => {
        res.json(err);
      });
  });

  app.post("/api/workouts",(req,res)=>{
    db.Workout.create(req.body).then((result)=>{
      console.log(result);
      res.json(result)})
  })
};