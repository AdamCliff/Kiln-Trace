import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import PieceEntry from "./pieceEntry";

function PiecesList() {
  // piece state variable for fetched data
  const [pieces, setPieces] = useState([null]);

  // on load, fetch data and set to piece variable
  useEffect(() => {
    try {
      fetch("http://localhost:3000/pieces")
        .then((res) => res.json())
        .then((data) => {
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
          <TableCaption>
            <Link
              to={"/"}
              id="new-piece-btn"
              className="py-2 px-4 bg-mutedGreen rounded-xl"
            >
              +
            </Link>
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-black w-[100px]">Date</TableHead>
              <TableHead className="text-black w-[100px]">Title</TableHead>
              <TableHead className="text-black w-[100px]">Stage</TableHead>
              <TableHead className="text-black w-[100px]">Method</TableHead>
              <TableHead className="text-black w-[100px]">Form</TableHead>
              <TableHead className="text-black w-[100px]">Weight</TableHead>
              <TableHead className="text-black w-[100px]">Dmensions</TableHead>
              <TableHead className="text-black w-[100px]">Overglaze</TableHead>
              <TableHead className="text-black w-[100px]">Underglaze</TableHead>
              <TableHead className="text-black text-right">Notes</TableHead>
              <TableHead className="text-black text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pieces[0] && pieces.map((piece) => <PieceEntry piece={piece} />)}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default PiecesList;
