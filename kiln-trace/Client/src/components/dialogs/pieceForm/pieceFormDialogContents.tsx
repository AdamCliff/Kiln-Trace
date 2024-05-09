import { useRef } from "react";

import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Piece } from "@/types/piece";
import { usePieceContext } from "../../../context/piecesContext";
import { usePresetsContext } from "@/context/presetsContext";
import usePieceState from "@/hooks/usePieceState";

import PieceFormStageSection from "./pieceFormStageSection";
import PieceFormDetailsSection from "./pieceFormDetailsSection";
import PieceFormDimensionsSection from "./pieceFormDimensionsSection";
import PieceFormGlazeSection from "./pieceFormGlazeSection";

function PieceFormDialogContents({
  setOpen,
  piece,
  handleSubmit,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  piece: any /* come back and change typing on this, causing trouble with usePieceState when typed */;
  handleSubmit: (piece: Piece, dispatch: React.Dispatch<any>) => Promise<any>;
}) {
  const { dispatch: pieceDispatch } = usePieceContext();
  const { presets, dispatch: presetDispatch } = usePresetsContext();

  const { piece: pieceState, updatePiece } = usePieceState(piece);

  const { title, artist, photos, notes, _id } = pieceState;

  const firstInputRef = useRef<HTMLInputElement>(null);

  // // prevent title autofocus
  // if (
  //   firstInputRef.current &&
  //   firstInputRef.current === document.activeElement
  // ) {
  //   // Remove focus from the first input field
  //   firstInputRef.current.blur();
  // }

  if (pieceState) {
    return (
      <>
        <DialogHeader className="mb-4">
          <DialogTitle>{piece ? "Edit Piece" : "New Piece"}</DialogTitle>
        </DialogHeader>
        <form
          action={`/pieces${_id ? "/" + _id : ""}`}
          method={piece ? "put" : "post"}
          className="flex flex-col gap-6 w-full h-[95%]"
        >
          <div className="flex gap-2">
            {/* about section */}
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="title"
                className="pl-1 font-medium text-md pointer-events-none"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => updatePiece({ title: e.target.value })}
                value={title}
                spellCheck={false}
                // ref={firstInputRef}
                className="text-field"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="artist"
                className="pl-1 font-medium text-md pointer-events-none"
              >
                Artist
              </label>
              <input
                type="text"
                name="artist"
                id="artist"
                onChange={(e) => updatePiece({ artist: e.target.value })}
                value={artist}
                spellCheck={false}
                className="text-field"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="photos" className="pl-1 font-medium text-md">
                Photos
              </label>
              <input
                type="file"
                name="photos"
                id="photos"
                onChange={(e) => updatePiece({ photos: e.target.value })}
                value={photos}
                className="text-background w-[100px] overflow-hidden file:cursor-pointer file:bg-accent file:bg-opacity-75 file:border-none file:outline-none file:rounded file:p-1 file:px-2 file:shadow-custom"
              />
            </div>
          </div>
          {/* stage section */}
          <PieceFormStageSection piece={pieceState} updatePiece={updatePiece} />
          {/* details section */}
          <PieceFormDetailsSection
            piece={pieceState}
            updatePiece={updatePiece}
            presets={presets}
            presetDispatch={presetDispatch}
          />
          {/* dimensions section */}
          <PieceFormDimensionsSection
            piece={pieceState}
            updatePiece={updatePiece}
          />
          {/* glazes section */}
          <PieceFormGlazeSection
            piece={pieceState}
            updatePiece={updatePiece}
            presets={presets}
            presetDispatch={presetDispatch}
          />
          {/* notes */}
          <div className="flex flex-col gap-2">
            <label htmlFor="notes" className="pl-1 text-md font-medium">
              Notes
            </label>
            <textarea
              name="notes"
              id="notes"
              onChange={(e) => updatePiece({ notes: e.target.value })}
              value={notes}
              className="text-field min-h-8"
            />
          </div>
          {/* submit and close dialog handling */}
          <DialogClose asChild>
            <Button
              onClick={() => {
                handleSubmit(pieceState, pieceDispatch);
                setOpen(false);
              }}
              type="button"
              variant="secondary"
              className="m-auto bg-secondary text-background h-min w-min p-4 rounded-xl"
            >
              Save
            </Button>
          </DialogClose>
        </form>
        {/* </DialogContent> */}
      </>
    );
  }
}

export default PieceFormDialogContents;
