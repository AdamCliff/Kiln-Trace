const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PieceDataPresetsSchema = new Schema({
  formPresets: {
    type: [String],
    required: true,
    default: () => {
      return [
        "bowl",
        "coffee cup",
        "jar",
        "mug",
        "planter",
        "plate",
        "platter",
        "tea cup",
        "test tile",
        "vase",
      ];
    },
  },
  methodPresets: {
    type: [String],
    required: true,
    default: () => {
      return [
        "mold formed",
        "pinched",
        "slab built",
        "slip cast",
        "thrown and altered",
        "wheel thrown",
      ];
    },
  },
  materialPresets: {
    type: [String],
    required: true,
    default: () => {
      return ["terracotta", "ball clay", "earthenware", "stoneware"];
    },
  },
  glazePresets: {
    type: [String],
    required: true,
    default: () => {
      return ["glaze1", "glaze2", "glaze3", "glaze4", "glaze5"];
    },
  },
  slipPresets: {
    type: [String],
    rquired: true,
    default: () => {
      return ["slip1", "slip2", "slip3", "slip4", "slip5"];
    },
  },
  artist: { type: [String], required: false },
});

const PieceDataPresets = mongoose.model(
  "pieceDataPresets",
  PieceDataPresetsSchema
);

module.exports = PieceDataPresets;
