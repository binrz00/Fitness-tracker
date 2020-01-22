const db = require("./models");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const mongoose = require("mongoose");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
require("./routes/api-routes")(app);
app.get("/", function(req, res){
  res.sendFile("index.html")
})
app.get("/", function(req, res){
    res.sendFile("/index.html")
  })
  app.get("/exercise", function (req, res) {
    res.sendfile(path.join(__dirname, "public/exercise.html"))
  });
// Starts the server to begin listening
mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost/workoutdb",
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));


  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });