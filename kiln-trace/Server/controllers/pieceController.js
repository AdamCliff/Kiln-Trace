const mongoose = require("mongoose");

const Piece = require("../models/pieceModel");

// get pieces list
const getPieces = async (req, res) => {
  try {
    const pieces = await Piece.find({});
    // console.log(pieces);
    res.status(200).json(pieces);
  } catch (error) {
    console.log(error);
  }
};

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
    console.log(piece);
    res.status(200).json(piece);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update piece
const updatePiece = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

// delete piece
const deletePiece = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPiece = await Piece.findByIdAndDelete(id);
    res.status(200).json(deletedPiece);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createPiece, getPieces, updatePiece, deletePiece };
