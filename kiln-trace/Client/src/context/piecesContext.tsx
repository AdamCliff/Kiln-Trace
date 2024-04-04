import React, { createContext, useContext, ReactNode, useReducer } from "react";

import { actionTypes, actions } from "./pieceActionEnums";
import { Piece } from "@/types/piece";

const initialState = {
  pieces: [] as Piece[],
};

type PieceContextValue = {
  pieces: Piece[] | undefined;
  dispatch: React.Dispatch<any>;
};

type PieceContextProviderProps = {
  children: ReactNode;
};

const PieceContext = createContext<PieceContextValue | undefined>(undefined);

// use context function
export const usePieceContext = (): PieceContextValue => {
  const pieces = useContext(PieceContext);

  if (!pieces) {
    throw new Error("PieceContext must be defined");
  }

  return pieces;
};

// reducer function
export const piecesReducer = (
  state: typeof initialState,
  action: actions
): any => {
  switch (action.type) {
    case actionTypes.LOAD_PIECES: {
      return {
        pieces: action.payload,
      };
    }
    case actionTypes.ADD_PIECE: {
      if (!state.pieces) return new Error("state.pieces is undefined");
      return {
        pieces: [...state.pieces, action.payload],
      };
    }
    case actionTypes.REMOVE_PIECE: {
      if (!state.pieces) return new Error("state.pieces is undefined");
      return {
        pieces: state.pieces.filter(
          (piece) => piece._id !== action.payload._id
        ),
      };
    }
    case actionTypes.EDIT_PIECE: {
      return {
        pieces: state.pieces.map((piece) =>
          piece._id === action.payload._id ? action.payload : piece
        ),
      };
    }
    default:
      return state;
  }
};

export const PieceContextProvider: React.FC<PieceContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(piecesReducer, initialState);

  return (
    <PieceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PieceContext.Provider>
  );
};
