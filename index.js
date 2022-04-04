const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("Start");
});

// Listen
app.listen(8000, () => {
  console.log("Listening on port 8000"); // localhost:8000
});
