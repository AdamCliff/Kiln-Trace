import { Piece } from "@/types/piece";
import { actionTypes } from "@/context/actionEnums";

export const handleDeletePiece = async (
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

export const handleNewPiece = async (
  piece: Piece,
  dispatch: React.Dispatch<any>
) => {
  try {
    // try post new piece
    const res = await fetch("http://localhost:3000/new-piece", {
      method: "POST",
      body: JSON.stringify(piece),
      headers: { "Content-Type": "application/json" },
    });

    //   await response
    const data = await res.json();

    // dispatch new piece
    dispatch({ type: actionTypes.ADD_PIECE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const handleEditPiece = async (
  piece: Piece,
  dispatch: React.Dispatch<any>
) => {
  try {
    // try edit piece
    const res = await fetch(`http://localhost:3000/pieces/${piece._id}`, {
      method: "PUT",
      body: JSON.stringify(piece),
      headers: { "Content-Type": "application/json" },
    });

    //   await response
    const data = await res.json();

    // dispatch edit piece
    dispatch({ type: actionTypes.EDIT_PIECE, payload: data });
  } catch (error) {
    console.error(error);
  }
};
