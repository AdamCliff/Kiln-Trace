import { useState } from "react";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

import NewPiece from "./newPiece";

function PieceListHeader() {
  // dialog open state
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header
        id="piece-list-header"
        className="flex items-center justify-between px-4 h-[7.5%]"
      >
        <h2 id="piece-list-title" className="text-3xl text-text">
          Pieces
        </h2>
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
            <NewPiece setOpen={setOpen} />
          </DialogContent>
        </Dialog>
        <div
          id="piece-counters"
          className="flex items-center justify-center divide-x divide-secondary"
        >
          <div id="unfinished-counter" className="pr-4">
            <h3 id="unfinished-number"># undone</h3>
            <span id="unfinished-number-title">Unfinished</span>
          </div>
          <div id="finished-counter" className="pl-4">
            <h3 id="unfinished-number"># done</h3>
            <span id="unfinished-number-title">Finished</span>
          </div>
        </div>
      </header>
    </>
  );
}

export default PieceListHeader;
