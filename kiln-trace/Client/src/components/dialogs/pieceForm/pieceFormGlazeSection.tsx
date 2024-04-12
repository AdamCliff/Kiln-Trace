import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Piece } from "@/types/piece";
import PresetDialog from "../presetForm/presetDialog";
// import GlazePresetSelectMenu from "./glazePresetSelectMenu";
import { handleNewPreset } from "@/helpers/presetHelperFunctions";
import GlazeSelectionCollapsible from "./glazeSelectionCollapsible";
import { useEffect } from "react";

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
  //   const { glaze, underglaze, slip } = presets;
  // const { glazePresets, slipPresets } = presets;
  const {
    innerGlaze,
    innerUnderglaze,
    innerSlip,
    outerGlaze,
    outerUnderglaze,
    outerSlip,
  } = piece;

  // console.log(glazePresets);
  // console.log(slipPresets);

  useEffect(() => console.log(piece), [piece]);

  return (
    <>
      {/* glazes section */}
      <Accordion
        type="single"
        collapsible
        defaultValue={
          innerGlaze[0] ||
          innerUnderglaze[0] ||
          innerSlip[0] ||
          outerGlaze[0] ||
          outerUnderglaze[0] ||
          outerSlip[0]
            ? "glazes"
            : ""
        }
      >
        <AccordionItem value="glazes">
          <AccordionTrigger>Glazes</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-start gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <label className="whitespace-nowrap">Inner Glaze</label>
                  <PresetDialog
                    presetName="glaze"
                    presetCategory="glazePresets"
                    handleSubmit={handleNewPreset}
                    dispatch={presetDispatch}
                  />
                </div>
                <GlazeSelectionCollapsible
                  presets={innerGlaze}
                  updatePiece={updatePiece}
                  presetName="innerGlaze"
                  presetList={presets?.glazePresets}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <label className="whitespace-nowrap">Inner Underglaze</label>
                  <PresetDialog
                    presetName="glaze"
                    presetCategory="glazePresets"
                    handleSubmit={handleNewPreset}
                    dispatch={presetDispatch}
                  />
                </div>
                <GlazeSelectionCollapsible
                  presets={innerUnderglaze}
                  updatePiece={updatePiece}
                  presetName="innerUnderglaze"
                  presetList={presets?.glazePresets}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <label className="whitespace-nowrap">Inner Slip</label>
                  <PresetDialog
                    presetName="slip"
                    presetCategory="slipPresets"
                    handleSubmit={handleNewPreset}
                    dispatch={presetDispatch}
                  />
                </div>
                <GlazeSelectionCollapsible
                  presets={innerSlip}
                  updatePiece={updatePiece}
                  presetName="innerSlip"
                  presetList={presets?.glazePresets}
                />
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <label className="whitespace-nowrap">Outer Glaze</label>
                  <PresetDialog
                    presetName="glaze"
                    presetCategory="glazePresets"
                    handleSubmit={handleNewPreset}
                    dispatch={presetDispatch}
                  />
                </div>
                <GlazeSelectionCollapsible
                  presets={outerGlaze}
                  updatePiece={updatePiece}
                  presetName="outerGlaze"
                  presetList={presets?.glazePresets}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <label className="whitespace-nowrap">Outer Underglaze</label>
                  <PresetDialog
                    presetName="glaze"
                    presetCategory="glazePresets"
                    handleSubmit={handleNewPreset}
                    dispatch={presetDispatch}
                  />
                </div>
                <GlazeSelectionCollapsible
                  presets={outerUnderglaze}
                  updatePiece={updatePiece}
                  presetName="outerUnderglaze"
                  presetList={presets?.glazePresets}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <label className="whitespace-nowrap">Outer Slip</label>
                  <PresetDialog
                    presetName="slip"
                    presetCategory="slipPresets"
                    handleSubmit={handleNewPreset}
                    dispatch={presetDispatch}
                  />
                </div>
                <GlazeSelectionCollapsible
                  presets={outerSlip}
                  updatePiece={updatePiece}
                  presetName="outerSlip"
                  presetList={presets?.glazePresets}
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
