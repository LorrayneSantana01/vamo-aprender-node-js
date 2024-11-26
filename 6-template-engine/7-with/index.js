const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine('handlebars', exphbs.engine())
app.set("view engine", "handlebars");

app.get('/post', (req, res) => {
  const post = {
    title: 'Aprender Node.js',
    category: 'JavaScript',
    body: 'Conteúdo importante...',
    comments: 4
  }
  res.render('blogpost', { post })
})

app.get("/", function (req, res) {
  const user = {
    name: "Lorrayne",
    surname: "Santana",
  };

  res.render("home", { user: user, auth: true });
});

app.get("/dashboard", function (req, res) {
  const items = ["Item 1", "Item 2", "Item 3"];

  res.render("dashboard", { items: items });
});

app.listen(3000);