import { useEffect, useState } from "react";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import { Piece } from "@/types/piece";
import PieceFormDialogContents from "./pieceFormDialogContents";

// change type later
function PieceFormDialog({
  // className = "",
  piece,
  handleSubmit,
}: {
  // className?: string;
  piece: any;
  handleSubmit: (piece: Piece, dispatch: React.Dispatch<any>) => Promise<any>;
}) {
  const [open, setOpen] = useState<boolean>(false);
  // const [cn, setCn] = useState<string>();

  // useEffect(() => {
  //   console.log(className);
  //   setCn(className);
  //   console.log(cn);
  // }, []);

  return (
    <>
      <div id="new-piece-form">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger /* className={cn} */>Edit Piece</DialogTrigger>
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
