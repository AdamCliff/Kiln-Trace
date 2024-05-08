import { useState, useEffect } from "react";
import { Piece } from "../types/piece";

const usePieceState = (initialPiece: Piece | null) => {
  const [piece, setPiece] = useState<Piece>({
    title: "",
    artist: "",
    photos: "",
    notes: "",
    formed: false,
    formedDate: undefined,
    trimmed: false,
    trimmedDate: undefined,
    bisqued: false,
    bisquedDate: undefined,
    glazed: false,
    glazedDate: undefined,
    fired: false,
    firedDate: undefined,
    method: "",
    form: "",
    material: "",
    weight: 0,
    height: 0,
    width: 0,
    pieceLength: 0,
    innerGlaze: [],
    innerUnderglaze: [],
    innerSlip: [],
    outerGlaze: [],
    outerUnderglaze: [],
    outerSlip: [],
    _id: "",
    __v: 0,
    ...initialPiece,
  });

  useEffect(() => {
    if (initialPiece) {
      setPiece(initialPiece);
    }
  }, [initialPiece]);

  const updatePiece = (updatedPiece: Partial<Piece>) => {
    setPiece((prevPiece) => ({
      ...prevPiece,
      ...updatedPiece,
    }));
  };

  return {
    piece,
    updatePiece,
  };
};

export default usePieceState;
