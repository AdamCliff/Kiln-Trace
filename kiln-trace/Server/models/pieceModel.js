const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DimensionsSchema = new Schema({
  height: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
});

const PieceSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },
    stage: {
      type: String,
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
    weight: {
      type: String,
      required: false,
    },
    dimensions: {
      type: DimensionsSchema,
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
