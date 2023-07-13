let express = require("express");
let app = express();
let bodyParser = require("body-parser");

const url = app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/name", url, (req, res) => {
  const data = req.body;
  const { first, last } = data;
  res.json({ name: `${first} + ${last}` });
});

app.use(express.static(__dirname + "/public"));

module.exports = app;
