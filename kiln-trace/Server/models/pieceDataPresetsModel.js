const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PresetSchema = new Schema({
  preset: {
    type: String,
    required: true,
  },
});

const Preset = mongoose.model("preset", PresetSchema);

// const PresetGroupSchema = new Schema({
//   presets: {
//     type: [PresetSchema],
//     required: false,
//   },
// });

const PieceDataPresetsSchema = new Schema({
  stagePresets: {
    type: [PresetSchema],
    required: true,
    default: () => {
      return [
        new Preset({ preset: "Formed" }),
        new Preset({ preset: "Trimmed" }),
        new Preset({ preset: "Bisqued" }),
        new Preset({ preset: "Glazed" }),
        new Preset({ preset: "Fired" }),
      ];
    },
  },
  formPresets: {
    type: [PresetSchema],
    required: true,
    default: () => {
      return [
        new Preset({ preset: "Bowl" }),
        new Preset({ preset: "Coffee Cup" }),
        new Preset({ preset: "Jar" }),
        new Preset({ preset: "Mug" }),
        new Preset({ preset: "Planter" }),
        new Preset({ preset: "Plate" }),
        new Preset({ preset: "Platter" }),
        new Preset({ preset: "Tea Cup" }),
        new Preset({ preset: "Test Tile" }),
        new Preset({ preset: "Vase" }),
      ];
    },
  },
  methodPresets: {
    type: [PresetSchema],
    required: true,
    default: () => {
      return [
        new Preset({ preset: "Mold Formed" }),
        new Preset({ preset: "Pinched" }),
        new Preset({ preset: "Slab Built" }),
        new Preset({ preset: "Slip Cast" }),
        new Preset({ preset: "Thrown and Altered" }),
        new Preset({ preset: "Wheel Thrown" }),
      ];
    },
  },
  materialPresets: {
    type: [PresetSchema],
    required: true,
    default: () => {
      return [
        new Preset({ preset: "Terracotta" }),
        new Preset({ preset: "Ball Clay" }),
        new Preset({ preset: "Earthenware" }),
        new Preset({ preset: "Stoneware" }),
      ];
    },
  },
  glazePresets: {
    type: [PresetSchema],
    required: true,
    default: () => {
      return [
        new Preset({ preset: "glaze1" }),
        new Preset({ preset: "glaze2" }),
        new Preset({ preset: "glaze3" }),
        new Preset({ preset: "glaze4" }),
        new Preset({ preset: "glaze5" }),
      ];
    },
  },
  underglazePresets: {
    type: [PresetSchema],
    required: true,
    default: () => {
      return [
        new Preset({ preset: "underglaze1" }),
        new Preset({ preset: "underglaze2" }),
        new Preset({ preset: "underglaze3" }),
        new Preset({ preset: "underglaze4" }),
        new Preset({ preset: "underglaze5" }),
      ];
    },
  },
  slipPresets: {
    type: [PresetSchema],
    rquired: true,
    default: () => {
      return [
        new Preset({ preset: "slip1" }),
        new Preset({ preset: "slip2" }),
        new Preset({ preset: "slip3" }),
        new Preset({ preset: "slip4" }),
        new Preset({ preset: "slip5" }),
      ];
    },
  },
  artist: { type: [PresetSchema], required: false },
});

const PieceDataPresets = mongoose.model(
  "pieceDataPresets",
  PieceDataPresetsSchema
);

module.exports = { PieceDataPresets, Preset, PresetSchema };
