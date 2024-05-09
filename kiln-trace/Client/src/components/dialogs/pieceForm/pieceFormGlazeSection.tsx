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
import GlazeSelectMenu from "./glazeSelectMenu";

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

  return (
    <>
      {/* glazes section */}
      <Accordion
        type="single"
        collapsible
        // default open causes double render issue
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
        <AccordionItem value="glazes" className="shadow-custom border-none">
          <AccordionTrigger className="accordian-trigger">
            Glaze, Underglaze, Slip
          </AccordionTrigger>
          <AccordionContent className="flex flex-col !gap-4 w-full accordian-content">
            <div
              id="glazes"
              className="flex items-start justify-around gap-8 px-4 h-auto w-full bg-accent bg-opacity-50 rounded p-2 py-4 shadow-custom transition-all"
            >
              <GlazeSelectMenu
                presetType="glaze"
                presetCategory="glazePresets"
                handleSubmit={handleNewPreset}
                dispatch={presetDispatch}
                selectedPresets={innerGlaze}
                updatePiece={updatePiece}
                presetName="innerGlaze"
                presetOptionList={presets?.glazePresets}
              />

              <GlazeSelectMenu
                presetType="glaze"
                presetCategory="glazePresets"
                handleSubmit={handleNewPreset}
                dispatch={presetDispatch}
                selectedPresets={outerGlaze}
                updatePiece={updatePiece}
                presetName="outerGlaze"
                presetOptionList={presets?.glazePresets}
              />
            </div>
            <div
              id="underglazes"
              className="flex items-start justify-around gap-8 px-4 w-full bg-accent bg-opacity-50 rounded p-2 py-4 shadow-custom transition-all"
            >
              <GlazeSelectMenu
                presetType="underglaze"
                presetCategory="underglazePresets"
                handleSubmit={handleNewPreset}
                dispatch={presetDispatch}
                selectedPresets={innerUnderglaze}
                updatePiece={updatePiece}
                presetName="innerUnderglaze"
                presetOptionList={presets?.underglazePresets}
              />

              <GlazeSelectMenu
                presetType="underglaze"
                presetCategory="underglazePresets"
                handleSubmit={handleNewPreset}
                dispatch={presetDispatch}
                selectedPresets={outerUnderglaze}
                updatePiece={updatePiece}
                presetName="outerUnderglaze"
                presetOptionList={presets?.underglazePresets}
              />
            </div>
            <div
              id="slips"
              className="flex items-start justify-around gap-8 px-4 w-full bg-accent bg-opacity-50 rounded p-2 py-4 shadow-custom transition-all"
            >
              <GlazeSelectMenu
                presetType="slip"
                presetCategory="slipPresets"
                handleSubmit={handleNewPreset}
                dispatch={presetDispatch}
                selectedPresets={innerSlip}
                updatePiece={updatePiece}
                presetName="innerSlip"
                presetOptionList={presets?.slipPresets}
              />

              <GlazeSelectMenu
                presetType="slip"
                presetCategory="slipPresets"
                handleSubmit={handleNewPreset}
                dispatch={presetDispatch}
                selectedPresets={outerSlip}
                updatePiece={updatePiece}
                presetName="outerSlip"
                presetOptionList={presets?.slipPresets}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default PieceFormGlazeSection;

{
  /* <div className="flex items-start gap-2 mb-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <h4 className="whitespace-nowrap pl-1 font-medium text-md">
                    Inner Glaze
                  </h4>
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
                  presetOptionList={presets?.glazePresets}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <h4 className="whitespace-nowrap pl-1 font-medium text-md">
                    Inner Underglaze
                  </h4>
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
                  presetOptionList={presets?.glazePresets}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <h4 className="whitespace-nowrap pl-1 font-medium text-md">
                    Inner Slip
                  </h4>
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
                  presetOptionList={presets?.slipPresets}
                />
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <h4 className="whitespace-nowrap pl-1 font-medium text-md">
                    Outer Glaze
                  </h4>
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
                  presetOptionList={presets?.glazePresets}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <h4 className="whitespace-nowrap pl-1 font-medium text-md">
                    Outer Underglaze
                  </h4>
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
                  presetOptionList={presets?.glazePresets}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-start gap-2 h-full w-min">
                  <h4 className="whitespace-nowrap pl-1 font-medium text-md">
                    Outer Slip
                  </h4>
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
                  presetOptionList={presets?.slipPresets}
                />
              </div>
            </div> */
}
