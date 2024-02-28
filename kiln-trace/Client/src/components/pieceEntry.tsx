import { TableCell, TableRow } from "@/components/ui/table";

function PieceEntry({ piece }: any) {
  console.log(piece);

  return (
    <>
      <TableRow className="trow">
        <TableCell className=" text-black font-medium">Today</TableCell>
        <TableCell className=" text-black font-medium">{piece.title}</TableCell>
        <TableCell className=" text-black font-medium">{piece.stage}</TableCell>
        <TableCell className=" text-black font-medium">
          {piece.method}
        </TableCell>
        <TableCell className=" text-black font-medium">{piece.form}</TableCell>
        <TableCell className=" text-black font-medium">
          {piece.weight}
        </TableCell>
        <TableCell className=" text-black font-medium">
          blahxblahxblah
        </TableCell>
        <TableCell className=" text-black font-medium">
          {piece.overglaze}
        </TableCell>
        <TableCell className="text-black font-medium">
          {piece.underglaze}
        </TableCell>
        <TableCell className="text-black font-medium text-right">
          {piece.notes}
        </TableCell>
      </TableRow>
    </>
  );
}

export default PieceEntry;
