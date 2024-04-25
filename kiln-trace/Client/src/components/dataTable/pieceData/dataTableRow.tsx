import { useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TableCell, TableRow } from "../../ui/table";
import { flexRender } from "@tanstack/react-table";

import PieceFormDialogContents from "../../dialogs/pieceForm/pieceFormDialogContents";

function DataTableRow({ row, table }: { row: any; table: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const meta = table.options.meta;

  return (
    <>
      <TableRow
        key={row.id}
        data-state={row.getIsSelected() && "selected"}
        onClick={() => setOpen(!open)}
        className="cursor-pointer hover:bg-accent hover:bg-opacity-50"
      >
        {row.getVisibleCells().map((cell: any) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-fit h-fit desktop:w-[700px] desktop:max-h-[900px] laptop:w-[600px] laptop:max-h-[800px] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary hover:scrollbar-thumb-secondary">
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
