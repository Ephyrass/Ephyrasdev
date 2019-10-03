const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

var index = require("./routes/index");

app.use(cors());
app.use(express.json());

app.use("/", index);

// Serve static asset if in prod
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}


/*Adds the react production build to serve react requests*/
app.use(express.static(path.join(__dirname, “../client/build”)));
/*React root*/
app.get(“*”, (req, res) => {
res.sendFile(path.join(__dirname + “../client/build/index.html”));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running");
});

module.exports = app;
