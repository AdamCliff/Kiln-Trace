const mongoose = require("mongoose");

const { PieceDataPresets } = require("../models/pieceDataPresetsModel");

const loadPiecePresets = async (req, res) => {
  try {
    // check if presets exist
    let piecePresets = await PieceDataPresets.find({});
    if (!piecePresets[0]) {
      // if presets don't exist, create defaults, refind, and return
      const presets = new PieceDataPresets();
      await presets.save();
      piecePresets = await PieceDataPresets.find({});
      res.status(200).json(piecePresets);
    } else if (piecePresets.length > 1) {
      // if multiple preset objects return, throw error
      const error = new Error("Multiple preset objects found");
      console.error(error);
      res.status(409).json(error);
    } else {
      // if presets to exist, return
      res.status(200).json(piecePresets);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// create new piece preset in specified category
const createPiecePreset = async (req, res) => {
  try {
    const { presetName, presetCategory } = req.body;

    const [presets] = await PieceDataPresets.find({});
    let newPresets;
    if (!presets[presetCategory].find((preset) => preset === presetName)) {
      presets[presetCategory].push(presetName);
      newPresets = await presets.save();
    }

    res.status(200).json(newPresets);
  } catch (error) {
    console.error(error);
  }
};

// updates a specified list of presets in the db
const editPiecePreset = async (req, res) => {
  try {
    //   const { id } = req.params;
    //   const updatedPiece = await Piece.findByIdAndUpdate(id, req.body, {
    //     new: true,
    //   });
    //   res.status(200).json(updatedPiece);
  } catch (error) {
    //   console.log(error);
    //   res.status(400).json({ error: error.message });
  }
};

// removes a specified preset in specified category
const removePiecePreset = async (req, res) => {
  try {
    const { preset, presetName } = req.params;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  // getPiecePresets,
  loadPiecePresets,
  createPiecePreset,
  editPiecePreset,
};
