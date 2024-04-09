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
        defaultValue={form || method || material ? "details" : ""}
      >
        <AccordionItem value="details">
          <AccordionTrigger>Form, Method, Material</AccordionTrigger>
          <AccordionContent className="flex gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start gap-2 h-full w-min">
                <label htmlFor="form">Form</label>
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
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start gap-2 h-full w-min">
                <label htmlFor="method">Method</label>
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
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-start gap-2 h-full w-min">
                <label htmlFor="material">Material</label>
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
