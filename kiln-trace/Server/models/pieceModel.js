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
    formedDate: {
      type: Date,
      required: false,
    },
    trimmed: {
      type: Boolean,
      required: false,
    },
    trimmedDate: {
      type: Date,
      required: false,
    },
    bisqued: {
      type: Boolean,
      required: false,
    },
    bisquedDate: {
      type: Date,
      required: false,
    },
    glazed: {
      type: Boolean,
      required: false,
    },
    glazedDate: {
      type: Date,
      required: false,
    },
    fired: {
      type: Boolean,
      required: false,
    },
    firedDate: {
      type: Date,
      required: false,
    },
    // property additions, must be calculated somehow
    // stage: {
    //   type: String,
    //   required: false,
    // },
    // date: {
    //   type: Date,
    //   required: false,
    // },
    // custom type for array
    form: {
      type: String,
      required: false,
    },
    // custom type for array
    method: {
      type: String,
      required: false,
    },
    // custom type for array
    material: {
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
    // property additions, must be created somehow
    // dimensions: {
    //   type: String,
    //   required: false,
    // },
    // custom type for in and out array of glazes on over and underglazes
    // over and underglazes must be arrays of two types, in and out
    overglaze: {
      type: [String],
      required: false,
    },
    underglaze: {
      type: [String],
      required: false,
    },
    // slip: {
    //   type: String,
    //   required: false,
    // },
    // IMAGES MUST BE CHANGED TO HAVE THE PROPER DATA AND UPLOAD PROCESS
    photos: {
      type: String,
      required: false,
    },
    // ??custom type for array??
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
