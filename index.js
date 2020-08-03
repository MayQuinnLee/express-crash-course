const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000; //look at the environment of the user first

app.listen(PORT, () => console.log(`Server started listening on port ${PORT}`));
