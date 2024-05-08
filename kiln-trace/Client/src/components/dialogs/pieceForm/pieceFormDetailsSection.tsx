import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Piece } from "@/types/piece";
import PresetDialog from "../presetForm/presetDialog";
import PresetSelectMenu from "./presetSelectMenu";
import { handleNewPreset } from "@/helpers/presetHelperFunctions";

function PieceFormDetailsSection({
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
  const { form, method, material } = piece;

  return (
    <>
      {/* details section */}
      <Accordion
        type="single"
        collapsible
        // default open causes double render issue
        // defaultValue={form || method || material ? "details" : ""}
      >
        <AccordionItem value="details" className="shadow-custom border-none">
          <AccordionTrigger className="accordian-trigger">
            Form, Method, Material
          </AccordionTrigger>
          <AccordionContent className="accordian-content">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-start gap-2 h-full w-min">
                <h4 className="pl-1 font-medium text-md">Form</h4>
                <PresetDialog
                  presetName="form"
                  presetCategory="formPresets"
                  handleSubmit={handleNewPreset}
                  dispatch={presetDispatch}
                />
              </div>
              <PresetSelectMenu
                preset={form}
                setPreset={updatePiece}
                presetName="form"
                presetList={presets?.formPresets}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-start gap-2 h-full w-min">
                <h4 className="pl-1 font-medium text-md">Method</h4>
                <PresetDialog
                  presetName="method"
                  presetCategory="methodPresets"
                  handleSubmit={handleNewPreset}
                  dispatch={presetDispatch}
                />
              </div>
              <PresetSelectMenu
                preset={method}
                setPreset={updatePiece}
                presetName="method"
                presetList={presets?.methodPresets}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-start gap-2 h-full w-min">
                <h4 className="pl-1 font-medium text-md">Material</h4>
                <PresetDialog
                  presetName="material"
                  presetCategory="materialPresets"
                  handleSubmit={handleNewPreset}
                  dispatch={presetDispatch}
                />
              </div>
              <PresetSelectMenu
                preset={material}
                setPreset={updatePiece}
                presetName="material"
                presetList={presets?.materialPresets}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default PieceFormDetailsSection;
