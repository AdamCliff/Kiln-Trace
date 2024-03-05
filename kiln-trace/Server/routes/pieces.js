const express = require("express");

const router = express.Router();

const {
  createPiece,
  getPieces,
  updatePiece,
  deletePiece,
} = require("../controllers/pieceController");

// create a new piece
router.post("/new-piece", createPiece);

// get list of pieces
router.get("/pieces", getPieces);

// update a piece

// delete a piece
router.delete("/delete-piece/:id", (req, res) => {
  deletePiece(req, res);
});

module.exports = router;
