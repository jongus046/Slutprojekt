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
  res.render("index", { namn: "Jonas" });
});


app.listen(port, () => {
  console.log("Servern är igång");
});
