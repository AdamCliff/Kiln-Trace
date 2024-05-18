const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PieceSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
      default: () => {
        return "Untitled";
      },
    },
    formed: {
      type: Boolean,
      required: false,
      default: () => {
        return false;
      },
    },
    formedDate: {
      type: Date,
      required: false,
      default: () => {
        return undefined;
      },
    },
    trimmed: {
      type: Boolean,
      required: false,
      default: () => {
        return false;
      },
    },
    trimmedDate: {
      type: Date,
      required: false,
      default: () => {
        return undefined;
      },
    },
    bisqued: {
      type: Boolean,
      required: false,
      default: () => {
        return false;
      },
    },
    bisquedDate: {
      type: Date,
      required: false,
      default: () => {
        return undefined;
      },
    },
    glazed: {
      type: Boolean,
      required: false,
      default: () => {
        return false;
      },
    },
    glazedDate: {
      type: Date,
      required: false,
      default: () => {
        return undefined;
      },
    },
    fired: {
      type: Boolean,
      required: false,
      default: () => {
        return false;
      },
    },
    firedDate: {
      type: Date,
      required: false,
      default: () => {
        return undefined;
      },
    },
    form: {
      type: String,
      required: false,
      default: () => {
        return "";
      },
    },
    method: {
      type: String,
      required: false,
      default: () => {
        return "";
      },
    },
    material: {
      type: String,
      required: false,
      default: () => {
        return "";
      },
    },
    width: {
      type: Number,
      required: false,
      default: () => {
        return 0;
      },
    },
    pieceLength: {
      type: Number,
      required: false,
      default: () => {
        return 0;
      },
    },
    height: {
      type: Number,
      required: false,
      default: () => {
        return 0;
      },
    },
    weight: {
      type: Number,
      required: false,
      default: () => {
        return "";
      },
    },
    innerGlaze: {
      type: [String],
      required: false,
      default: () => {
        return [];
      },
    },
    innerUnderglaze: {
      type: [String],
      required: false,
      default: () => {
        return [];
      },
    },
    innerSlip: {
      type: [String],
      required: false,
      default: () => {
        return [];
      },
    },
    outerGlaze: {
      type: [String],
      required: false,
      default: () => {
        return [];
      },
    },
    outerUnderglaze: {
      type: [String],
      required: false,
      default: () => {
        return [];
      },
    },
    outerSlip: {
      type: [String],
      required: false,
      default: () => {
        return [];
      },
    },
    // IMAGES MUST BE CHANGED TO HAVE THE PROPER DATA AND UPLOAD PROCESS
    photos: {
      type: String,
      required: false,
    },
    artist: {
      type: String,
      required: false,
      default: () => {
        return "";
      },
    },
    notes: {
      type: String,
      required: false,
      default: () => {
        return "";
      },
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// dimensions field calculation
PieceSchema.virtual("dimensions").get(function () {
  if (this.pieceLength > 0 || this.width > 0 || this.height > 0) {
    return `${this.pieceLength > 0 ? this.pieceLength : "-"} x ${
      this.width > 0 ? this.width : "-"
    } x ${this.height > 0 ? this.height : "-"}`;
  }
  return "";
});

// stage field calculation
PieceSchema.virtual("stage").get(function () {
  let stage;
  if (this.formed) stage = "Formed";
  if (this.trimmed) stage = "Trimmed";
  if (this.bisqued) stage = "Bisqued";
  if (this.glazed) stage = "Glazed";
  if (this.fired) stage = "Fired";
  return stage;
});

// stage field calculation
PieceSchema.virtual("date").get(function () {
  let date;
  if (this.formed) date = this.formedDate;
  if (this.trimmed) date = this.trimmedDate;
  if (this.bisqued) date = this.bisquedDate;
  if (this.glazed) date = this.glazedDate;
  if (this.fired) date = this.firedDate;
  return date;
});

PieceSchema.virtual("glazes").get(function () {
  let glazeList = "";
  if (this.innerGlaze)
    this.innerGlaze.forEach((glaze) =>
      glaze ? (glazeList += `${glazeList && ","}${glaze}`) : ""
    );
  if (this.outerGlaze)
    this.outerGlaze.forEach((glaze) =>
      glaze ? (glazeList += `${glazeList && ","}${glaze}`) : ""
    );
  // console.log(glazeList);
  return glazeList;
});

PieceSchema.virtual("underglazes").get(function () {
  let underglazeList = "";
  if (this.innerUnderglaze)
    this.innerUnderglaze.forEach((underglaze) =>
      underglaze
        ? (underglazeList += `${underglazeList && ","}${underglaze}`)
        : ""
    );
  if (this.outerUnderglaze)
    this.outerUnderglaze.forEach((underglaze) =>
      underglaze
        ? (underglazeList += `${underglazeList && ","}${underglaze}`)
        : ""
    );
  // console.log(underglazeList);
  return underglazeList;
});

PieceSchema.virtual("slips").get(function () {
  let slipList = "";
  if (this.innerSlip)
    this.innerSlip.forEach((slip) =>
      slip ? (slipList += `${slipList && ","}${slip}`) : ""
    );
  if (this.outerSlip)
    this.outerSlip.forEach((slip) =>
      slip ? (slipList += `${slipList && ","}${slip}`) : ""
    );
  // console.log(slipList);
  return slipList;
});

const Piece = mongoose.model("piece", PieceSchema);

module.exports = Piece;
