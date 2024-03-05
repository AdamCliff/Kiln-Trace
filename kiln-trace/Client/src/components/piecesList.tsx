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
            {/* <Link
              to={"/new-piece"}
              id="new-piece-btn"
              className="flex items-center justify-center h-min w-min p-2 bg-mutedGreen rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Link> */}
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
