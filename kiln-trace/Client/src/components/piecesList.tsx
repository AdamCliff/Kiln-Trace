import { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import PieceEntry from "./pieceEntry";
import { Piece } from "@/types/piece";

function PiecesList() {
  // piece state variable for fetched data
  const [pieces, setPieces] = useState<Piece[] | null>(null);

  // on load, fetch pieces data from db and set to pieces array
  useEffect(() => {
    try {
      fetch("http://localhost:3000/pieces")
        .then((res) => res.json())
        .then((data: Piece[]) => {
          setPieces(data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

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
