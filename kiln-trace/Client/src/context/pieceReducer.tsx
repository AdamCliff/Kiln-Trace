// import { useReducer } from "react";

// import { ADD_PIECE, REMOVE_PIECE, EDIT_PIECE, GET_PIECE } from "./actionEnums";

// export const piecesReducer = (state, action) => {
//   switch (action.type) {
//     case ADD_PIECE: {
//       return {};
//     }
//     case REMOVE_PIECE: {
//       return {};
//     }
//     case EDIT_PIECE: {
//       return {};
//     }
//     case GET_PIECE: {
//       return {};
//     }
//     default:
//       return state;
//   }
// };

// dummy alternative provider method
// export const PiecesContextProvider = () => {
//   const [state, dispatch] = useReducer(piecesReducer, {
//     pieces: undefined,
//   });

//   return (
//     <PieceContext.Provider value={{ state, dispatch }}>
//       {children}
//     </PieceContext.Provider>
//   );
// };
