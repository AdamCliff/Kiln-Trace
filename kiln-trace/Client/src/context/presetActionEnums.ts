import { PiecePresets } from "@/types/piecePresets";

export enum presetActionTypes {
  ADD_PRESET = "ADD_PRESET",
  REMOVE_PRESET = "REMOVE_PRESET",
  EDIT_PRESET = "EDIT_PRESET",
  LOAD_PRESETS = "LOAD_PRESETS",
}

export type actions =
  | { type: presetActionTypes.ADD_PRESET; payload: any }
  | { type: presetActionTypes.REMOVE_PRESET; payload: any }
  | { type: presetActionTypes.EDIT_PRESET; payload: any }
  | { type: presetActionTypes.LOAD_PRESETS; payload: PiecePresets };
