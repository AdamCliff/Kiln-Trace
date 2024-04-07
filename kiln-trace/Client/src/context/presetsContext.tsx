import React, { createContext, useContext, ReactNode, useReducer } from "react";

import { presetActionTypes, actions } from "@/context/presetActionEnums";
import { PiecePresets } from "@/types/piecePresets";

const initialState = {
  presets: {} as PiecePresets,
};

type PresetsContextValue = {
  presets: PiecePresets | undefined;
  dispatch: React.Dispatch<any>;
};

type PresetsContextProviderProps = {
  children: ReactNode;
};

const PresetsContext = createContext<PresetsContextValue | undefined>(
  undefined
);

// use context function
export const usePresetsContext = (): PresetsContextValue => {
  const presets = useContext(PresetsContext);

  if (!presets) {
    throw new Error("PresetsContext must be defined");
  }

  return presets;
};

// reducer function
export const presetsReducer = (
  state: typeof initialState,
  action: actions
): any => {
  switch (action.type) {
    case presetActionTypes.LOAD_PRESETS: {
      return {
        presets: action.payload,
      };
    }
    case presetActionTypes.ADD_PRESET: {
      if (!state.presets) return new Error("state.presets is undefined");
      return {
        presets: action.payload,
      };
    }
    case presetActionTypes.REMOVE_PRESET: {
      if (!state.presets) return new Error("state.presets is undefined");
      return {
        // presets: state.presets.filter(
        //   (piece) => piece._id !== action.payload._id
        // ),
      };
    }
    case presetActionTypes.EDIT_PRESET: {
      return {
        // presets: state.presets.map((piece) =>
        //   piece._id === action.payload._id ? action.payload : piece
        // ),
      };
    }
    default:
      return state;
  }
};

export const PresetsContextProvider: React.FC<PresetsContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(presetsReducer, initialState);

  return (
    <PresetsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PresetsContext.Provider>
  );
};
