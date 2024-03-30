import { useEffect, useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import PieceFormDialogContents from "./pieceFormDialogContents";
import { flexRender } from "@tanstack/react-table";
import { TableCell, TableRow } from "./ui/table";

function DataTableRow({ row, table }: { row: any; table: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const meta = table.options.meta;

  //   useEffect(() => console.log(open), [open]);
  //   error where dialog wont close by click outside window unless clicked and held

  return (
    <>
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
      </TableRow>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <PieceFormDialogContents
            setOpen={setOpen}
            piece={row.original}
            handleSubmit={meta.handleEditPiece}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DataTableRow;
