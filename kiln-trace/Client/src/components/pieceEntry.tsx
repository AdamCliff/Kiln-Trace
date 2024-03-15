import { useState } from "react";

import { TableCell, TableRow } from "@/components/ui/table";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import { Piece } from "@/types/piece";
import EditPiece from "./editPiece";
import { usePieceContext } from "@/context/piecesContext";
import { actionTypes } from "@/context/actionEnums";

function PieceEntry({ piece }: { piece: Piece }) {
  const { dispatch } = usePieceContext();

  const [activePiece, setActivePiece] = useState<Piece>();
  // dialog state variable
  const [open, setOpen] = useState<boolean>(false);

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: String
  ) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/delete-piece/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      dispatch({ type: actionTypes.REMOVE_PIECE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getCurrentStage = (piece: Piece) => {
    if (piece.fired) return "Fired";
    if (piece.glazed) return "Glazed";
    if (piece.bisqued) return "Bisqued";
    if (piece.trimmed) return "Trimmed";
    if (piece.formed) return "Formed";
    return "-";
  };

  return (
    <>
      <TableRow className="trow">
        <TableCell className=" text-black font-medium">{piece.date}</TableCell>
        <TableCell className=" text-black font-medium">{piece.title}</TableCell>
        <TableCell className=" text-black font-medium">
          {getCurrentStage(piece)}
        </TableCell>
        <TableCell className=" text-black font-medium">
          {piece.method}
        </TableCell>
        <TableCell className=" text-black font-medium">{piece.form}</TableCell>
        <TableCell className=" text-black font-medium">
          {piece.weight && piece.weight.toString()}
        </TableCell>
        <TableCell className=" text-black font-medium">
          {piece.pieceLength ? piece.pieceLength : "-"}
          {" x "}
          {piece.width ? piece.width : "-"}
          {" x "}
          {piece.height ? piece.height : "-"}
        </TableCell>
        <TableCell className=" text-black font-medium">
          {piece.overglaze}
        </TableCell>
        <TableCell className="text-black font-medium">
          {piece.underglaze}
        </TableCell>
        <TableCell className="text-black font-medium text-left">
          {piece.notes}
        </TableCell>
        <TableCell className="text-black font-medium text-right">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger onClick={() => setActivePiece(piece)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </DialogTrigger>
            <DialogContent>
              <EditPiece
                setOpen={setOpen}
                piece={activePiece}
                _id={piece._id}
              />
            </DialogContent>
          </Dialog>
        </TableCell>
        <TableCell className="text-black font-medium text-right">
          <button
            onClick={(e) => {
              handleDelete(e, piece._id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default PieceEntry;
