const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

var index = require("./routes/index");

app.use(cors());
app.use(express.json());

app.use("/", index);

// Serve static asset if in prod
app.use(express.static(path.join(__dirname, "client", "build")));

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running");
});

module.exports = app;
