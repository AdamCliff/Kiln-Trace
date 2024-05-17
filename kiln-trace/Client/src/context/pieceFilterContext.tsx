import React, { createContext, useContext, ReactNode, useReducer } from "react";

import { filterActionTypes, actions } from "@/context/filterActionEnums";
import { Filters } from "@/types/filters";

const initialState = {
  filters: {
    formFilters: "",
    methodFilters: "",
    materialFilters: "",
    glazeFilters: "",
    underglazeFilters: "",
    slipFilters: "",
    artistFilters: "",
  } as Filters,
};
// const initialState = {
//   filters: {} as Filters,
// };

type FiltersContextValue = {
  filters: Filters | undefined;
  dispatch: React.Dispatch<any>;
};

type FiltersContextProviderProps = {
  children: ReactNode;
};

const FiltersContext = createContext<FiltersContextValue | undefined>(
  undefined
);

// use context function
export const useFiltersContext = (): FiltersContextValue => {
  const filters = useContext(FiltersContext);

  if (!filters) {
    throw new Error("FiltersContext must be defined");
  }

  return filters;
};

// reducer function
export const filtersReducer = (
  state: typeof initialState,
  action: actions
): any => {
  switch (action.type) {
    case filterActionTypes.LOAD_FILTERS: {
      return {
        filters: action.payload,
      };
    }
    case filterActionTypes.ADD_FILTER: {
      if (!state.filters) return new Error("state.filters is undefined");
      return {
        filters: action.payload,
      };
    }
    case filterActionTypes.REMOVE_FILTER: {
      if (!state.filters) return new Error("state.filters is undefined");
      return {
        filters: action.payload,
      };
    }
    case filterActionTypes.EDIT_FILTER: {
      return {};
    }
    case filterActionTypes.UPDATE_CURRENT_FILTERS: {
      // console.log("dispatch update");
      // console.log(action.payload);
      return {
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export const FiltersContextProvider: React.FC<FiltersContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(filtersReducer, initialState);

  return (
    <FiltersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FiltersContext.Provider>
  );
};
