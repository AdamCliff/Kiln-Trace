const mongoose = require("mongoose");

const PieceDataPresets = require("../models/pieceDataPresetsModel");

// initialize default presets in the db
const setDefaultPresets = async (req, res) => {
  try {
    // check if presets exist
    const piecePresets = await PieceDataPresets.find({});
    if (!piecePresets[0]) {
      const presets = new PieceDataPresets();
      await presets.save();
      res.status(200).json(presets);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// gets a list of all presets from the db
const getPiecePresets = async (req, res) => {
  try {
    const piecePresets = await PieceDataPresets.find({});
    console.log(piecePresets);
    res.status(200).json(piecePresets);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

// updates a specified list of presets in the db
const editPiecePresets = async (req, res) => {
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

module.exports = { getPiecePresets, editPiecePresets, setDefaultPresets };
