const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PresetSchema = new Schema({
  preset: {
    type: {},
    required: true,
  },
});

const Preset = mongoose.model("preset", PresetSchema);

const PresetTypeSchema = new Schema({
  presets: {
    type: [PresetSchema],
    required: false,
  },
});

const PieceDataPresetsSchema = new Schema({
  formPresets: {
    type: PresetTypeSchema,
    required: true,
    default: () => {
      return {
        presets: [
          new Preset({ preset: "bowl" }),
          new Preset({ preset: "Coffee Cup" }),
          new Preset({ preset: "Jar" }),
          new Preset({ preset: "Mug" }),
          new Preset({ preset: "Planter" }),
          new Preset({ preset: "Plate" }),
          new Preset({ preset: "Platter" }),
          new Preset({ preset: "Tea Cup" }),
          new Preset({ preset: "Test Tile" }),
          new Preset({ preset: "Vase" }),
        ],
      };
    },
  },
  methodPresets: {
    type: PresetTypeSchema,
    required: true,
    default: () => {
      return {
        presets: [
          new Preset({ preset: "Mold Formed" }),
          new Preset({ preset: "Pinched" }),
          new Preset({ preset: "Slab Built" }),
          new Preset({ preset: "Slip Cast" }),
          new Preset({ preset: "Thrown and Altered" }),
          new Preset({ preset: "Wheel Thrown" }),
        ],
      };
    },
  },
  materialPresets: {
    type: PresetTypeSchema,
    required: true,
    default: () => {
      return {
        presets: [
          new Preset({ preset: "Terracotta" }),
          new Preset({ preset: "Ball Clay" }),
          new Preset({ preset: "Earthenware" }),
          new Preset({ preset: "Stoneware" }),
        ],
      };
    },
  },
  glazePresets: {
    type: PresetTypeSchema,
    required: true,
    default: () => {
      return {
        presets: [
          new Preset({ preset: "glaze1" }),
          new Preset({ preset: "glaze2" }),
          new Preset({ preset: "glaze3" }),
          new Preset({ preset: "glaze4" }),
          new Preset({ preset: "glaze5" }),
        ],
      };
    },
  },
  slipPresets: {
    type: PresetTypeSchema,
    rquired: true,
    default: () => {
      return {
        presets: [
          new Preset({ preset: "slip1" }),
          new Preset({ preset: "slip2" }),
          new Preset({ preset: "slip3" }),
          new Preset({ preset: "slip4" }),
          new Preset({ preset: "slip5" }),
        ],
      };
    },
  },
  artist: { type: PresetTypeSchema, required: false },
});

const PieceDataPresets = mongoose.model(
  "pieceDataPresets",
  PieceDataPresetsSchema
);

module.exports = PieceDataPresets;
