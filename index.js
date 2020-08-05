const express = require("express");
const path = require("path");
const members = require("./Members");

const app = express();

const logger = (req, res, next) => {
  console.log("Hello");
  next();
};

//Init middleware
app.use(logger);

//Get all members
app.get("/api/members", (req, res) => res.json(members));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000; //look at the environment of the user first

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));
