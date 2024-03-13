const express = require("express");

const router = express.Router();

const {
  createPiece,
  getPieces,
  editPiece,
  deletePiece,
} = require("../controllers/pieceController");

// create a new piece
router.post("/new-piece", createPiece);

// get list of pieces
router.get("/pieces", getPieces);

// update a piece
router.put("/pieces/:id", (req, res) => {
  editPiece(req, res);
});

// delete a piece
router.delete("/delete-piece/:id", (req, res) => {
  deletePiece(req, res);
});

module.exports = router;
