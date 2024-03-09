const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PieceSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    formed: {
      type: Boolean,
      required: false,
    },
    trimmed: {
      type: Boolean,
      required: false,
    },
    bisqued: {
      type: Boolean,
      required: false,
    },
    glazed: {
      type: Boolean,
      required: false,
    },
    fired: {
      type: Boolean,
      required: false,
    },
    method: {
      type: String,
      required: false,
    },
    form: {
      type: String,
      required: false,
    },
    width: {
      type: Number,
      required: false,
    },
    pieceLength: {
      type: Number,
      required: false,
    },
    height: {
      type: Number,
      required: false,
    },
    weight: {
      type: Number,
      required: false,
    },
    overglaze: {
      type: [String],
      required: false,
    },
    underglaze: {
      type: [String],
      required: false,
    },
    photos: {
      type: String,
      required: false,
    },
    artist: {
      type: String,
      required: false,
    },
    notes: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Piece = mongoose.model("piece", PieceSchema);

module.exports = Piece;
