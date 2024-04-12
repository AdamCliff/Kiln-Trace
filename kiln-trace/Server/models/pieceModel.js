const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Preset = require("./pieceDataPresetsModel");

const GlazeLayerSchema = new Schema({
  glaze1: {
    type: Preset,
    required: false,
    default: () => {
      return new Preset();
    },
  },
  glaze2: {
    type: Preset,
    required: false,
    default: () => {
      return new Preset();
    },
  },
  glaze3: {
    type: Preset,
    required: false,
    default: () => {
      return new Preset();
    },
  },
  glaze4: {
    type: Preset,
    required: false,
    default: () => {
      return new Preset();
    },
  },
  glaze5: {
    type: Preset,
    required: false,
    default: () => {
      return new Preset();
    },
  },
});

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
      type: GlazeLayerSchema,
      required: false,
      default: () => {
        return new GlazeLayerSchema();
      },
    },
    innerUnderglaze: {
      type: GlazeLayerSchema,
      required: false,
      default: () => {
        return new GlazeLayerSchema();
      },
    },
    innerSlip: {
      type: GlazeLayerSchema,
      required: false,
      default: () => {
        return new GlazeLayerSchema();
      },
    },
    outerGlaze: {
      type: GlazeLayerSchema,
      required: false,
      default: () => {
        return new GlazeLayerSchema();
      },
    },
    outerUnderglaze: {
      type: GlazeLayerSchema,
      required: false,
      default: () => {
        return new GlazeLayerSchema();
      },
    },
    outerSlip: {
      type: GlazeLayerSchema,
      required: false,
      default: () => {
        return new GlazeLayerSchema();
      },
    },
    // glaze: {
    //   inner: {
    //     type: [String],
    //     required: false,
    //     default: () => {
    //       return [];
    //     },
    //   },
    //   outer: {
    //     type: [String],
    //     required: false,
    //     default: () => {
    //       return [];
    //     },
    //   },
    // },
    // underglaze: {
    //   inner: {
    //     type: [String],
    //     required: false,
    //     default: () => {
    //       return [];
    //     },
    //   },
    //   outer: {
    //     type: [String],
    //     required: false,
    //     default: () => {
    //       return [];
    //     },
    //   },
    // },
    // slip: {
    //   inner: {
    //     type: [String],
    //     required: false,
    //     default: () => {
    //       return [];
    //     },
    //   },
    //   outer: {
    //     type: [String],
    //     required: false,
    //     default: () => {
    //       return [];
    //     },
    //   },
    // },
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

// const GlazeLayerSchema = new Schema({
//   inner: {
//     type: [String],
//     required: false,
//   },
//   outer: {
//     type: [String],
//     required: false,
//   },
// });

// dimensions field calculation
PieceSchema.virtual("dimensions").get(function () {
  return `${
    this.pieceLength > 0 ? this.pieceLength : "-"
  } x ${this.width > 0 ? this.width : "-"} x ${this.height > 0 ? this.height : "-"}`;
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

const Piece = mongoose.model("piece", PieceSchema);

module.exports = Piece;
