const mongoose = require("mongoose");

const Piece = require("../models/pieceModel");

// create new piece
const createPiece = async (req, res) => {
  //   desctructure piece data
  const {
    title,
    stage,
    method,
    form,
    weight,
    height,
    width,
    length,
    overglaze,
    underglaze,
    photos,
    artist,
    notes,
  } = req.body;

  try {
    const piece = await Piece.create({
      title,
      stage,
      method,
      form,
      weight,
      height,
      width,
      length,
      overglaze,
      underglaze,
      photos,
      artist,
      notes,
    });
    res.status(200).json(piece);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPiece };
