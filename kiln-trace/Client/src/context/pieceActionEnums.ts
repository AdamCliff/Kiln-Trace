import { Piece } from "@/types/piece";

export enum actionTypes {
  ADD_PIECE = "ADD_PIECE",
  REMOVE_PIECE = "REMOVE_PIECE",
  EDIT_PIECE = "EDIT_PIECE",
  LOAD_PIECES = "LOAD_PIECES",
  SET_LOADING = "SET_LOADING",
}

// change the any value here
export type actions =
  | { type: actionTypes.ADD_PIECE; payload: any }
  | { type: actionTypes.REMOVE_PIECE; payload: any }
  | { type: actionTypes.EDIT_PIECE; payload: any }
  | { type: actionTypes.LOAD_PIECES; payload: Piece[] }
  | { type: actionTypes.SET_LOADING; payload: boolean };
