require("dotenv").config();
let express = require("express");
let app = express();

/* app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});
 */
app.get("/json", (req, res) => {
  const response = {
    message: "Hello json",
  };

  if (process.env.MESSAGE_STYLE == "uppercase") {
    response.message = "HELLO JSON";
  }
  res.json(response);
});

module.exports = app;
