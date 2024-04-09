import { useState } from "react";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import { Piece } from "@/types/piece";
import PieceFormDialogContents from "./pieceFormDialogContents";

// change type later
function PieceFormDialog({
  piece,
  handleSubmit,
}: {
  piece: any;
  handleSubmit: (piece: Piece, dispatch: React.Dispatch<any>) => Promise<any>;
}) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div id="new-piece-form">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>Edit Piece</DialogTrigger>
          <DialogContent>
            <PieceFormDialogContents
              setOpen={setOpen}
              piece={piece}
              handleSubmit={handleSubmit}
            />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default PieceFormDialog;
