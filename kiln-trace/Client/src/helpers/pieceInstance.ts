import { useEffect, useState } from "react";
import { usePieceContext } from "../context/piecesContext";
import { Piece, GlazeLayer } from "@/types/piece";

function usePieceState(piece: any): [Piece, (updatedPiece: any) => void] {
  const [pieceState, setPieceState] = useState<Piece>({
    title: piece?.title || "",
    artist: piece?.artist || "",
    photos: piece?.photos || "",
    notes: piece?.notes || "",
    formed: piece?.formed || false,
    formedDate: piece?.formed || piece ? piece.formedDate : undefined,
    trimmed: piece?.trimmed || false,
    trimmedDate: piece?.trimmed || piece ? piece.trimmedDate : undefined,
    bisqued: piece?.bisqued || false,
    bisquedDate: piece?.bisqued || piece ? piece.bisquedDate : undefined,
    glazed: piece?.glazed || false,
    glazedDate: piece?.glazed || piece ? piece.glazedDate : undefined,
    fired: piece?.fired || false,
    firedDate: piece?.fired || piece ? piece.firedDate : undefined,
    method: piece?.method || "",
    form: piece?.form || "",
    material: piece?.material || "",
    weight: piece?.weight || 0,
    height: piece?.height || 0,
    width: piece?.width || 0,
    pieceLength: piece?.pieceLength || 0,
    glaze: {
      inner: piece?.glaze?.inner || [],
      outer: piece?.glaze?.outer || [],
    },
    underglaze: {
      inner: piece?.underglaze?.inner || [],
      outer: piece?.underglaze?.outer || [],
    },
    slip: {
      inner: piece?.slip?.inner || [],
      outer: piece?.slip?.outer || [],
    },
    _id: piece?._id || "",
    __v: piece?.__v || 0,
  });

  const updatePieceState = (updatedPiece: Piece) => {
    setPieceState((prevPieceState) => ({
      ...prevPieceState,
      ...updatedPiece,
    }));
    console.log(pieceState);
  };

  return [pieceState, updatePieceState];
}

export default usePieceState;
