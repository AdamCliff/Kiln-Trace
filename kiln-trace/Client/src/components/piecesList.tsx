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
        <Table className="table-auto">
          <TableHeader>
            <TableRow>
              <TableHead className="text-black mdb:w-[100px] md:w-fit lg:w-[100px]">
                Date
              </TableHead>
              <TableHead className="text-blackmdb:w-[100px]  md:w-fit lg:w-[100px]">
                Title
              </TableHead>
              <TableHead className="text-black mdb:hidden md:w-fit lg:w-[100px]">
                Artist
              </TableHead>
              <TableHead className="text-black mdb:w-[100px] md:w-fit lg:w-[100px]">
                Stage
              </TableHead>
              <TableHead className="text-black mdb:w-[100px] md:w-fit lg:w-[100px]">
                Form
              </TableHead>
              <TableHead className="text-black mdb:hidden md:w-fit lg:w-[100px]">
                Method
              </TableHead>
              <TableHead className="text-black mdb:hidden md:w-fit lg:w-[100px]">
                Material
              </TableHead>
              <TableHead className="text-black mdb:hidden md:w-fit lg:w-[100px]">
                Weight
              </TableHead>
              <TableHead className="text-black mdb:hidden md:w-fit lg:w-[150px]">
                Dmensions
              </TableHead>
              <TableHead className="text-black mdb:hidden md:w-fit lg:w-[100px]">
                Overglaze
              </TableHead>
              <TableHead className="text-black mdb:hidden md:w-fit lg:w-[100px]">
                Underglaze
              </TableHead>
              <TableHead className="text-black text-left">Notes</TableHead>
              <TableHead className="text-black text-center  md:w-fit lg:w-[100px]"></TableHead>
              <TableHead className="text-black text-center  md:w-fit lg:w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          {/* once piece data has loaded, map it */}
          <TableBody>
            {pieces &&
              pieces.map((piece: Piece) => (
                <PieceEntry key={piece._id} piece={piece} />
              ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default PiecesList;
