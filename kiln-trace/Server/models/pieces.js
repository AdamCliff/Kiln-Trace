const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PieceSchema = new Schema({
  title: String,
  form: String,
});

const Piece = mongoose.model("piece", PieceSchema);

module.exports = Piece;
