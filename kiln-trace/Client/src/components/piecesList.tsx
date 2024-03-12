import { useEffect, useRef } from "react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import PieceEntry from "./pieceEntry";
import { Piece } from "@/types/piece";
import { usePieceContext } from "@/context/piecesContext";
import { actionTypes } from "@/context/actionEnums";

function PiecesList() {
  const { pieces, dispatch } = usePieceContext();

  const shouldRun = useRef(true);
  useEffect(() => {
    if (shouldRun) {
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
  }, [dispatch]);

  return (
    <>
      <div className="w-full h-full">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-black w-[100px]">Date</TableHead>
              <TableHead className="text-black w-[100px]">Title</TableHead>
              <TableHead className="text-black w-[100px]">Stage</TableHead>
              <TableHead className="text-black w-[100px]">Method</TableHead>
              <TableHead className="text-black w-[100px]">Form</TableHead>
              <TableHead className="text-black w-[100px]">Weight</TableHead>
              <TableHead className="text-black w-[150px]">Dmensions</TableHead>
              <TableHead className="text-black w-[100px]">Overglaze</TableHead>
              <TableHead className="text-black w-[100px]">Underglaze</TableHead>
              <TableHead className="text-black text-left">Notes</TableHead>
              <TableHead className="text-black text-right w-min">
                Delete
              </TableHead>
            </TableRow>
          </TableHeader>
          {/* once piece data has loaded, map it */}
          <TableBody>
            {pieces &&
              pieces.map((piece: Piece) => <PieceEntry piece={piece} />)}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default PiecesList;
