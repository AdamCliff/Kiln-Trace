const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Preset = new Schema({
//   preset: {
//     type: String,
//     required: true,
//   },
//   id: {
//     type: Number,
//     required: true,
//   },
// });

const PieceDataPresetsSchema = new Schema({
  formPresets: {
    type: [String],
    required: true,
    default: () => {
      return [
        "Bowl",
        "Coffee Cup",
        "Jar",
        "Mug",
        "Planter",
        "Plate",
        "Platter",
        "Tea Cup",
        "Test Tile",
        "Vase",
      ];
    },
  },
  methodPresets: {
    type: [String],
    required: true,
    default: () => {
      return [
        "Mold Formed",
        "Pinched",
        "Slab Built",
        "Slip Cast",
        "Thrown and Altered",
        "Wheel Thrown",
      ];
    },
  },
  materialPresets: {
    type: [/* Preset */ String],
    required: true,
    default: () => {
      return ["Terracotta", "Ball Clay", "Earthenware", "Stoneware"];
      // return [
      //   { preset: "terracotta", id: 0 },
      //   { preset: "ball clay", id: 1 },
      //   { preset: "earthenware", id: 2 },
      //   { preset: "stoneware", id: 3 },
      // ];
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
    type: [/* Preset */ String],
    rquired: true,
    default: () => {
      return ["slip1", "slip2", "slip3", "slip4", "slip5"];
      // return [
      //   { preset: "slip1", id: 0 },
      //   { preset: "slip2", id: 1 },
      //   { preset: "slip3", id: 2 },
      //   { preset: "slip4", id: 3 },
      //   { preset: "slip5", id: 4 },
      // ];
    },
  },
  artist: { type: [String], required: false },
});

const PieceDataPresets = mongoose.model(
  "pieceDataPresets",
  PieceDataPresetsSchema
);

module.exports = PieceDataPresets;
