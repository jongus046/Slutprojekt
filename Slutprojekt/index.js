const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const port = 3000;
const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", "./views");

const uri = `mongodb+srv://jongus046:98kQONXQE8mNLs8D@cluster1234.zkfbqvs.mongodb.net/jongus046`;

mongoose.connect(uri);
mongoose.connection
  .on("open", () => console.log("mongoose is connected to db jongus046"))
  .on("error", (error) => console.log(error));
const thing = require("./models/Thing.js");
const Thing = require("./models/Thing.js");

app.get("/", (req, res) => {
  data = {
    title: "hej på dig",
  }
  res.render("index", data);
});

app.get("/surf", async (req, res) => {
  const data = {
    title: "All Things",
    things: await thing.findOne().sort({ createdAt: -1 }).exec(),
  };
  res.render("surf", data);
});

app.get("/login", async (req, res) => {
  const data = {
    title: "All Things",
    things: await thing.findOne({ email: 'jongus046@edu.linkoping.se' }).exec(),
  };
  res.render("login", data);
});

app.post("/login", async (req, res) => {
  await thing.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  res.redirect("/surf");
});



app.listen(port, () => {
  console.log("Servern är igång");
});
