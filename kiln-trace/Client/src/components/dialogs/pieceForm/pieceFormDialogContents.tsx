import {
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
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

  console.log("piece form rendered");

  if (pieceState) {
    console.log("pieceState checked out");
    console.log(pieceState);
    return (
      <>
        {/* <DialogContent className="w-fit h-fit desktop:w-[700px] desktop:max-h-[900px] laptop:w-[600px] laptop:max-h-[800px] overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary hover:scrollbar-thumb-secondary"> */}
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
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(e) => updatePiece({ title: e.target.value })}
                value={title}
                className="border border-secondary rounded-[6px] px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="artist">Artist</label>
              <input
                type="text"
                name="artist"
                id="artist"
                onChange={(e) => updatePiece({ artist: e.target.value })}
                value={artist}
                className="border border-secondary rounded-[6px] px-2 py-1"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <label htmlFor="photos">Photos</label>
              <input
                type="file"
                name="photos"
                id="photos"
                onChange={(e) => updatePiece({ photos: e.target.value })}
                value={photos}
                className="w-[100px] overflow-hidden"
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
            <label htmlFor="notes">Notes</label>
            <textarea
              name="notes"
              id="notes"
              onChange={(e) => updatePiece({ notes: e.target.value })}
              value={notes}
              className="border border-secondary rounded-[6px] px-2 py-1"
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
