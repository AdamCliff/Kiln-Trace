import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Piece } from "@/types/piece";
import PresetDialog from "../presetForm/presetDialog";
import { handleNewPreset } from "@/helpers/presetHelperFunctions";
import GlazeSelectionCollapsible from "./glazeSelectionCollapsible";
import React from "react";

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
  const {
    innerGlaze,
    innerUnderglaze,
    innerSlip,
    outerGlaze,
    outerUnderglaze,
    outerSlip,
  } = piece;

  console.log("glaze section rendered");

  return (
    <>
      {/* glazes section */}
      <Accordion
        type="single"
        collapsible
        // defaultValue={
        //   innerGlaze[0] ||
        //   innerUnderglaze[0] ||
        //   innerSlip[0] ||
        //   outerGlaze[0] ||
        //   outerUnderglaze[0] ||
        //   outerSlip[0]
        //     ? "glazes"
        //     : ""
        // }
      >
        <AccordionItem value="glazes">
          <AccordionTrigger>Glazes</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-start gap-2 mb-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <h4 className="whitespace-nowrap">Inner Glaze</h4>
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
                  <h4 className="whitespace-nowrap">Inner Underglaze</h4>
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
                  <h4 className="whitespace-nowrap">Inner Slip</h4>
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
                  <h4 className="whitespace-nowrap">Outer Glaze</h4>
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
                  <h4 className="whitespace-nowrap">Outer Underglaze</h4>
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
                  <h4 className="whitespace-nowrap">Outer Slip</h4>
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

export default React.memo(PieceFormGlazeSection);
