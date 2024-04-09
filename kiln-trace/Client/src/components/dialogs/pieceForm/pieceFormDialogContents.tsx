// import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
//   SelectLabel,
//   SelectGroup,
//   SelectSeparator,
// } from "@/components/ui/select";
import { DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { usePieceContext } from "../../../context/piecesContext";
import { usePresetsContext } from "@/context/presetsContext";
import { handleNewPreset } from "@/helpers/presetHelperFunctions";
import { Piece } from "@/types/piece";
import PresetDialog from "../presetForm/presetDialog";
import usePieceState from "@/hooks/usePieceState";
import PieceFormStageSection from "./pieceFormStageSection";
import PieceFormDetailsSection from "./pieceFormDetailsSection";
import PieceFormDimensionsSection from "./pieceFormDimensionsSection";

// change type later
function PieceFormDialogContents({
  setOpen,
  piece,
  handleSubmit,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  piece: any;
  handleSubmit: (piece: Piece, dispatch: React.Dispatch<any>) => Promise<any>;
}) {
  const { dispatch: pieceDispatch } = usePieceContext();
  const { presets, dispatch: presetDispatch } = usePresetsContext();

  const { piece: pieceState, updatePiece } = usePieceState(piece);

  const { title, artist, photos, glaze, underglaze, slip, notes, _id } =
    pieceState;

  return (
    <>
      <div id="piece-form">
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
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                onChange={(e) => updatePiece({ title: e.target.value })}
                value={title}
                className="border border-secondary rounded-[6px] px-2 py-1"
              />
            </div>
            <div className="flex flex-col gap-2">
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
          <Accordion
            type="single"
            collapsible
            defaultValue={
              piece?.glaze.inner[0] ||
              piece?.glaze.outer[0] ||
              piece?.underglaze.inner[0] ||
              piece?.underglaze.outer[0] ||
              piece?.slip.inner[0] ||
              piece?.slip.outer[0]
                ? "glazes"
                : ""
            }
          >
            <AccordionItem value="glazes">
              <AccordionTrigger>Glazes</AccordionTrigger>
              <AccordionContent>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-start gap-2 h-full w-min">
                      <label htmlFor="glazeInner" className="whitespace-nowrap">
                        Inner Glaze
                      </label>
                      <PresetDialog
                        presetName="glaze"
                        presetCategory="glazePresets"
                        handleSubmit={handleNewPreset}
                        dispatch={presetDispatch}
                      />
                    </div>
                    {/* <PresetSelectMenu
                      // temporarily setting in array by index to circumvent type error
                      preset={
                        glazeInner
                          ? glazeInner[glazeInner.length - 1]
                          : glazeInner
                      }
                      setPreset={setGlazeInner}
                      presetName="glaze"
                      presetList={presets?.glazePresets}
                    /> */}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="underglazeInner">Inner Underglaze</label>
                    <input
                      type="text"
                      name="underglazeInner"
                      id="underglazeInner"
                      onChange={(e) =>
                        updatePiece({ underglaze: { inner: [e.target.value] } })
                      }
                      value={underglaze.inner}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="slipInner">Inner Slip</label>
                    <input
                      type="text"
                      name="slipInner"
                      id="slipInner"
                      onChange={(e) =>
                        updatePiece({ slip: { inner: [e.target.value] } })
                      }
                      value={slip.inner}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="glazeOuter">Outer Glaze</label>
                    <input
                      type="text"
                      name="glazeOuter"
                      id="glazeOuter"
                      onChange={(e) =>
                        updatePiece({ glaze: { outer: [e.target.value] } })
                      }
                      value={glaze.outer}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="underglazeOuter">Outer Underglaze</label>
                    <input
                      type="text"
                      name="underglazeOuter"
                      id="underglazeOuter"
                      onChange={(e) =>
                        updatePiece({ underglaze: { outer: [e.target.value] } })
                      }
                      value={underglaze.outer}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="slipOuter">Outer Slip</label>
                    <input
                      type="text"
                      name="slipOuter"
                      id="slipOuter"
                      onChange={(e) =>
                        updatePiece({ slip: { outer: [e.target.value] } })
                      }
                      value={slip.outer}
                      className="border border-secondary rounded-[6px] px-2 py-1 w-full"
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
      </div>
    </>
  );
}

export default PieceFormDialogContents;
