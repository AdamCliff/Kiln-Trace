import { useEffect, useRef } from "react";

import PiecesDataTable from "./piecesDataTable";

import { Piece } from "@/types/piece";
import { pieceColumns } from "./pieceTableColumns";
import { usePieceContext } from "@/context/piecesContext";
import { actionTypes } from "@/context/actionEnums";

function PiecesList() {
  const { pieces, dispatch } = usePieceContext();

  const shouldRun = useRef(true);
  useEffect(() => {
    if (shouldRun.current) {
      shouldRun.current = false;
      const fetchData = async () => {
        try {
          const res: Response = await fetch("http://localhost:3000/pieces");
          const data: Piece[] | undefined = await res.json();

          dispatch({ type: actionTypes.LOAD_PIECES, payload: data });
        } catch (error) {
          console.error(`Failed to fetch piece list: ${error}`);
        }
      };

      fetchData();
    }
  }, [pieces]);

  return (
    <>
      <div className="w-full h-full">
        <PiecesDataTable columns={pieceColumns} data={pieces} />
      </div>
    </>
  );
}

export default PiecesList;
