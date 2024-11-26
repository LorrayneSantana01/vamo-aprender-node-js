const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  const user = {
    name: "Lorrayne",
    surname: "Santana",
    age: 30
  };

  const auth = true

  const approved = true

  res.render("home", { user: user, auth: true, approved: true});
});

app.get("/dashboard", function (req, res) {
  res.render("dashboard");
});

app.listen(3000);