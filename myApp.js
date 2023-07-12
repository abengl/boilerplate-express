//require("dotenv").config();
let express = require("express");
let app = express();

app.get("/name", (req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;
  // OR you can destructure and rename the keys
  //var { first: firstName, last: lastName } = req.query;
  res.json({ name: `${firstName} ${lastName}` });
});

app.use(express.static(__dirname + "/public"));

/* app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({ echo: word });
});

app.use(express.static(__dirname + "/public"));
 */
/* app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: req.time });
  }
);
 */
//Alternative to save the middleware for further uses
/* const middleware = (req, res, next) => {
  req.time = new Date().toString();
  next();
};

app.get("/now", middleware, (req, res) => {
  res.send({
    time: req.time
  });
}); */

/* app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.use(express.static(__dirname + "/public")); */

/* app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // res.send("Hello Express");
  res.sendFile(__dirname + "/views/index.html");
});
 */

/* app.get("/json", (req, res) => {
  const response = {
    message: "Hello json",
  };

  if (process.env.MESSAGE_STYLE == "uppercase") {
    response.message = "HELLO JSON";
  }
  res.json(response);
});
*/
module.exports = app;
