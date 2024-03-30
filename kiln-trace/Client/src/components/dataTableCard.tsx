import { useState } from "react";
import {
  getCurrentStage,
  getCurrentStageDate,
} from "@/helpers/pieceHelperFunctions";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import PieceFormDialogContents from "./pieceFormDialogContents";
import { flexRender } from "@tanstack/react-table";

function DataTableCard({ row, table }: { row: any; table: any }) {
  const [open, setOpen] = useState<boolean>(false);
  const meta = table.options.meta;
  const cells = row.getVisibleCells();
  const [select] = cells.filter((cell: any) => cell.column.id === "select");
  const [actions] = cells.filter((cell: any) => cell.column.id === "actions");

  return (
    <div>
      <div className="relative flex flex-col justify-center border border-primary desktop:w-[15rem] desktop:h-[20rem] laptop:w-[10rem] laptop:h-[15rem]">
        <div className="absolute top-2 left-2">
          {flexRender(select.column.columnDef.cell, select.getContext())}
        </div>
        <button
          onClick={() => {
            setOpen((open) => !open);
          }}
          className="w-full h-full"
        >
          <div className="flex items-center justify-center p-1 h-[60%] border-b border-primary">
            placeholder
          </div>
          <div className="flex flex-col items-start justify-around p-2 h-[35%]">
            <span>{row.original.title}</span>
            <span>
              {getCurrentStage(row.original)} -{" "}
              {getCurrentStageDate(row.original)}
            </span>
            <span>{row.original.artist ? row.original.artist : "-"}</span>
          </div>
          <div className="absolute bottom-2 right-2">
            {flexRender(actions.column.columnDef.cell, actions.getContext())}
          </div>
        </button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <PieceFormDialogContents
            setOpen={setOpen}
            piece={row.original}
            handleSubmit={meta.handleEditPiece}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DataTableCard;
