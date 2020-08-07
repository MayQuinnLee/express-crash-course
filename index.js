const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require("./Members");

const app = express();

//Init middleware
// app.use(logger);

//Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage Route (using handlebars)
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members,
  })
);

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Members API route
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000; //look at the environment of the user first

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));
