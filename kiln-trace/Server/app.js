require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Piece = require("./models/pieces");

// express app
const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("connected to db"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  console.log("get request");
  res.send("response message");
});

app.get("/piece", (req, res) => {
  const piece = new Piece({
    title: "a piece",
    form: "bowl",
  });
  console.log("piece endpoint");
  piece.save();
});
