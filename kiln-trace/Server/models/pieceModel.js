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
    stage: {
      type: String,
      required: false,
    },
    date: {
      type: Date,
      required: false,
    },
    form: {
      type: String,
      required: false,
    },
    method: {
      type: String,
      required: false,
    },
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
    dimensions: {
      type: String,
      required: false,
    },
    // custom type for in and out array of glazes on over and underglazes
    // over and underglazes must be arrays of two types, in and out
    /* over */ glaze: {
      type: [String],
      required: false,
    },
    underglaze: {
      type: [String],
      required: false,
    },
    slip: {
      type: [String],
      required: false,
    },
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

// dimensions field calculation
PieceSchema.pre("save", (next) => {
  this.dimensions = `${this.pieceLength} x ${this.width} x ${this.height}`;
  next();
});

// stage field calculation
PieceSchema.pre("save", (next) => {
  if (this.formed) this.stage = "Formed";
  if (this.trimmed) this.stage = "Trimmed";
  if (this.bisqued) this.stage = "Bisqued";
  if (this.glazed) this.stage = "Glazed";
  if (this.fired) this.stage = "Fired";
  next();
});

// date field calculation
PieceSchema.pre("save", (next) => {
  if (this.formed) this.date = formedDate;
  if (this.trimmed) this.date = trimmedDate;
  if (this.bisqued) this.date = bisquedDate;
  if (this.glazed) this.date = glazedDate;
  if (this.fired) this.date = firedDate;
  next();
});

const Piece = mongoose.model("piece", PieceSchema);

module.exports = Piece;
