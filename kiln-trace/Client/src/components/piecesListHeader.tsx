import { useEffect, useState } from "react";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import { handleNewPiece } from "@/helpers/pieceHelperFunctions";
import PieceFormDialogContents from "./pieceFormDialogContents";
import PresetDialog from "./presetDialog";
import { usePieceContext } from "@/context/piecesContext";
import { handleNewPreset } from "@/helpers/presetHelperFunctions";

function PieceListHeader() {
  const { pieces, dispatch } = usePieceContext();

  // dialog open state
  const [open, setOpen] = useState<boolean>(false);
  const [piecesDone, setPiecesDone] = useState<number>(0);
  const [piecesNotDone, setPiecesNotDone] = useState<number>(0);

  useEffect(() => {
    setPiecesDone(0);
    setPiecesNotDone(0);
    pieces?.forEach((piece) => {
      piece.fired
        ? setPiecesDone((piecesDone) => piecesDone + 1)
        : setPiecesNotDone((piecesNotDone) => piecesNotDone + 1);
    });
  }, [pieces]);

  return (
    <>
      <header
        id="piece-list-header"
        className="relative flex items-center justify-between px-4 h-[7.5%] border-b border-primary"
      >
        <h2 id="piece-list-title" className="text-3xl text-text font-semibold">
          Pieces
        </h2>
        <div className="absolute top-1/2 left-2/4 -translate-y-1/2 -translate-x-1/2">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="bg-secondary rounded stroke-background w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </DialogTrigger>
            <DialogContent>
              <PieceFormDialogContents
                setOpen={setOpen}
                piece={undefined}
                handleSubmit={handleNewPiece}
              />
            </DialogContent>
          </Dialog>
        </div>
        {/* <PresetDialog
          presetName="material"
          presetCategory="materialPresets"
          handleSubmit={handleNewPreset}
        /> */}
        <div
          id="piece-counters"
          className="flex items-center justify-center divide-x divide-secondary"
        >
          <div id="unfinished-counter" className="pr-4">
            <h3 className="text-center font-bold text-text">{piecesNotDone}</h3>
            <span className="text-primary">In Progress</span>
          </div>
          <div id="finished-counter" className="pl-4">
            <h3 className="text-center font-bold text-text">{piecesDone}</h3>
            <span className="text-primary">Completed</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default PieceListHeader;
