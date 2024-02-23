import { TableCell, TableRow } from "@/components/ui/table";

function PieceEntry() {
  return (
    <>
      <TableRow>
        <TableCell className="text-black font-medium">Today</TableCell>
        <TableCell className="text-black font-medium">A title</TableCell>
        <TableCell className="text-black font-medium">Bisqued</TableCell>
        <TableCell className="text-black font-medium">Thrown</TableCell>
        <TableCell className="text-black font-medium">Vase</TableCell>
        <TableCell className="text-black font-medium">12 lbs</TableCell>
        <TableCell className="text-black font-medium">30'x20'x15'</TableCell>
        <TableCell className="text-black font-medium">
          Pottery Peacock
        </TableCell>
        <TableCell className="text-black font-medium">Generica</TableCell>
        <TableCell className="text-black font-medium text-right">
          Demo notes, should not appear fully and instead have either an ellipse
          with a hover to show all or similar idea
        </TableCell>
      </TableRow>
    </>
  );
}

export default PieceEntry;
