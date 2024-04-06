const express = require("express");

const router = express.Router();

const {
  loadPiecePresets,
  createPiecePreset,
} = require("../controllers/pieceDataPresetsController");

// set defaults initially
// router.post("/presets-new", setDefaultPresets);

// create a new piece
router.post("/presets", createPiecePreset);

// get list of pieces
router.get("/presets", loadPiecePresets);

// update a piece
// router.put("/pieces/:id", (req, res) => {
//   editPiece(req, res);
// });

// delete a piece
// router.delete("/pieces/:id", (req, res) => {
//   deletePiece(req, res);
// });

module.exports = router;
