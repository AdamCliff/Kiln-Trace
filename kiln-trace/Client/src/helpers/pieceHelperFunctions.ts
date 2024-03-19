import { format } from "date-fns";
import { Piece } from "@/types/piece";
import { actionTypes } from "@/context/actionEnums";

export const getCurrentStage = (piece: Piece) => {
  if (piece.fired) return "Fired";
  if (piece.glazed) return "Glazed";
  if (piece.bisqued) return "Bisqued";
  if (piece.trimmed) return "Trimmed";
  if (piece.formed) return "Formed";
  return "-";
};

export const getCurrentStageDate = (piece: Piece) => {
  let date: Date | undefined = undefined;
  if (piece.fired) date = new Date(piece.firedDate);
  if (piece.glazed) date = new Date(piece.glazedDate);
  if (piece.bisqued) date = new Date(piece.bisquedDate);
  if (piece.trimmed) date = new Date(piece.trimmedDate);
  if (piece.formed) date = new Date(piece.formedDate);
  let formattedDate: String | undefined;
  date
    ? (formattedDate = format(date, "MM/dd/yy"))
    : (formattedDate = undefined);
  return formattedDate;
};

export const handleDelete = async (
  id: String,
  dispatch: React.Dispatch<any>
) => {
  try {
    const res = await fetch(`http://localhost:3000/pieces/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    dispatch({ type: actionTypes.REMOVE_PIECE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
