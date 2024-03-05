const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DimensionsSchema = new Schema({
  height: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
});

const StageSchema = new Schema({
  stage: {
    type: String,
    required: true,
  },
});

const StageLogSchema = new Schema({
  formed: {
    type: StageSchema,
    required: true,
  },
  trimmed: {
    type: StageSchema,
    required: true,
  },
  bisqued: {
    type: StageSchema,
    required: true,
  },
  glazed: {
    type: StageSchema,
    required: true,
  },
  fired: {
    type: StageSchema,
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
    stageLog: {
      type: StageLogSchema,
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
      type: Number,
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
