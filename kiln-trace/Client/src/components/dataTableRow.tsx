import { useEffect, useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import PieceFormDialogContents from "./pieceFormDialogContents";
import { flexRender } from "@tanstack/react-table";
import { TableCell, TableRow } from "./ui/table";

function DataTableRow({ row, table }: { row: any; table: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const meta = table.options.meta;

  useEffect(() => console.log(open), [open]);

  return (
    <TableRow
      key={row.id}
      data-state={row.getIsSelected() && "selected"}
      onClick={() => setOpen(!open)}
      className="cursor-pointer hover:bg-primary/50"
    >
      {row.getVisibleCells().map((cell: any) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <PieceFormDialogContents
            setOpen={setOpen}
            piece={row.original}
            handleSubmit={meta.handleEditPiece}
          />
        </DialogContent>
      </Dialog>
    </TableRow>
  );
}

export default DataTableRow;
