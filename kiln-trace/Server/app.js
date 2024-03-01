require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const {
  createPiece,
  getPieces,
  updatePiece,
  deletePiece,
} = require("./controllers/pieceController");

// express app
const app = express();

// address cors errors in development
app.use(cors());
// allow access to body attribute in req object
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("connected to db"))
  .catch((err) => console.log(err));

// listen to port
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// routes
// ------
// create a new piece
app.post("/new-piece", createPiece);

// get list of pieces
app.get("/pieces", getPieces);

// update a piece

// delete a piece
app.delete("/delete-piece/:id", (req, res) => {
  deletePiece(req, res);
});
