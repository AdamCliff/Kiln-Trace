import { Filters } from "@/types/filters";

export enum filterActionTypes {
  ADD_FILTER = "ADD_FILTER",
  REMOVE_FILTER = "REMOVE_FILTER",
  EDIT_FILTER = "EDIT_FILTER",
  LOAD_FILTERS = "LOAD_FILTERS",
  UPDATE_CURRENT_FILTERS = "UPDATE_CURRENT_FILTERS",
}

export type actions =
  | { type: filterActionTypes.ADD_FILTER; payload: any }
  | { type: filterActionTypes.REMOVE_FILTER; payload: any }
  | { type: filterActionTypes.EDIT_FILTER; payload: any }
  | { type: filterActionTypes.LOAD_FILTERS; payload: Filters }
  | { type: filterActionTypes.UPDATE_CURRENT_FILTERS; payload: any };
