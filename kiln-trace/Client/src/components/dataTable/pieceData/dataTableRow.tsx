import { useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TableCell, TableRow } from "../../ui/table";
import { flexRender } from "@tanstack/react-table";

import PieceFormDialogContents from "../../dialogs/pieceForm/pieceFormDialogContents";

function DataTableRow({
  row,
  table,
  even,
}: {
  row: any;
  table: any;
  even: boolean;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const meta = table.options.meta;

  const handleRowClick = (
    event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
  ) => {
    const target = event.target as HTMLElement;
    if (!target.closest("#row")) {
      // Ignore clicks not from row element
      return;
    }
    // Toggle the dialog open state for the row
    setOpen(!open);
  };

  return (
    <>
      <TableRow
        key={row.id}
        id="row"
        data-state={row.getIsSelected() && "selected"}
        onClick={(e) => {
          handleRowClick(e);
        }}
        className={`cursor-pointer bg-accent ${!even ? "bg-opacity-0" : "bg-opacity-10"} hover:bg-opacity-50`}
      >
        {row.getVisibleCells().map((cell: any) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="piece-dialog shadow-inset-custom-lg">
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
