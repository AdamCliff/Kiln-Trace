import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Piece } from "@/types/piece";
import PresetDialog from "../presetForm/presetDialog";
import PresetSelectMenu from "../../pieceRoute/presetSelectMenu";
import { handleNewPreset } from "@/helpers/presetHelperFunctions";

function PieceFormGlazeSection({
  piece,
  updatePiece,
  presets,
  presetDispatch,
}: {
  piece: Piece;
  updatePiece: (updatedPiece: Partial<Piece>) => void;
  presets: any;
  presetDispatch: React.Dispatch<any>;
}) {
  const { glaze, underglaze, slip } = piece;

  return (
    <>
      {/* glazes section */}
      <Accordion
        type="single"
        collapsible
        defaultValue={
          glaze.inner?.[0] ||
          glaze.outer?.[0] ||
          underglaze.inner?.[0] ||
          underglaze.outer?.[0] ||
          slip.inner?.[0] ||
          slip.outer?.[0]
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
    </>
  );
}

export default PieceFormGlazeSection;
