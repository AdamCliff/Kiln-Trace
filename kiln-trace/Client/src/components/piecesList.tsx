import { useEffect, useRef } from "react";

import { DataTable } from "./ui/dataTable";
import { DataTableWithCards } from "./ui/dataTableWithCards";

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
  // ^was dispatch

  return (
    <>
      <div className="w-full h-full">
        {/* <DataTable columns={pieceColumns} data={pieces} /> */}
        <DataTableWithCards columns={pieceColumns} data={pieces} />
      </div>
    </>
  );
}

export default PiecesList;
