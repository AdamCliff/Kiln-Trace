const mongoose = require("mongoose");

const Piece = require("../models/pieceModel");

// get pieces list
const getPieces = async (req, res) => {
  try {
    const pieces = await Piece.find({}).select("+dimensions");
    console.log(pieces);
    res.status(200).json(pieces);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// create new piece
const createPiece = async (req, res) => {
  //   desctructure piece data
  const {
    title,
    formed,
    formedDate,
    trimmed,
    trimmedDate,
    bisqued,
    bisquedDate,
    glazed,
    glazedDate,
    fired,
    firedDate,
    method,
    form,
    weight,
    height,
    width,
    pieceLength,
    glaze,
    underglaze,
    slip,
    photos,
    artist,
    notes,
  } = req.body;

  try {
    const piece = await Piece.create({
      title,
      formed,
      formedDate,
      trimmed,
      trimmedDate,
      bisqued,
      bisquedDate,
      glazed,
      glazedDate,
      fired,
      firedDate,
      method,
      form,
      weight,
      height,
      width,
      pieceLength,
      glaze,
      underglaze,
      slip,
      photos,
      artist,
      notes,
    });
    res.status(201).json(piece);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// updates a piece in the database as specified by an id
const editPiece = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPiece = await Piece.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedPiece);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

// deletes a piece in the database as specified by an id
const deletePiece = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPiece = await Piece.findByIdAndDelete(id);
    res.status(200).json(deletedPiece);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPiece, getPieces, editPiece, deletePiece };
