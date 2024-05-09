import { useState } from "react";

import { ChevronsUpDown, ChevronsDownUp } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Piece } from "@/types/piece";
import { Presets } from "@/types/piecePresets";
import PresetDialog from "../presetForm/presetDialog";
import GlazeSelectionCollapsible from "./glazeSelectionCollapsible";

function GlazeSelectMenu({
  presetType,
  presetCategory,
  handleSubmit,
  dispatch,
  selectedPresets,
  updatePiece,
  presetName,
  presetOptionList,
}: {
  presetType: string;
  presetCategory: string;
  handleSubmit: (
    presetName: string | undefined,
    presetCategory: string,
    dispatch: React.Dispatch<any>
  ) => Promise<void>;
  dispatch: React.Dispatch<any>;
  selectedPresets: string[];
  updatePiece: (updatedPiece: Partial<Piece>) => void;
  presetName:
    | "innerGlaze"
    | "innerUnderglaze"
    | "innerSlip"
    | "outerGlaze"
    | "outerUnderglaze"
    | "outerSlip";
  presetOptionList: Presets;
}) {
  // setting this to false allows for glaze accordion to expand smoothly
  // similar feeling problem to double opening dialog as result of conditional expansion on open
  // see if the same solution can work for both problems
  const [isOpen, setIsOpen] = useState<boolean>(selectedPresets.length > 0);

  return (
    <>
      <div className="flex flex-col gap-2 w-full transition-all">
        <div className="flex items-center justify-start gap-2 h-full w-full">
          <h4 className="whitespace-nowrap pl-1 font-medium text-md capitalize">
            Inner {presetType}
          </h4>
          <PresetDialog
            presetType={presetType}
            presetCategory={presetCategory}
            handleSubmit={handleSubmit}
            dispatch={dispatch}
          />
          <Button
            variant="ghost"
            size="sm"
            className="w-9 p-0 ml-auto rounded"
            disabled={selectedPresets.length === 0}
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(!isOpen);
            }}
          >
            {!isOpen ? (
              <ChevronsUpDown className="h-4 w-4 transition-all" />
            ) : (
              <ChevronsDownUp className="h-4 w-4 transition-all" />
            )}
            <span className="sr-only">Toggle</span>
          </Button>
        </div>
        <GlazeSelectionCollapsible
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedPresets={selectedPresets}
          updatePiece={updatePiece}
          presetName={presetName}
          presetOptionList={presetOptionList}
        />
      </div>
    </>
  );
}

export default GlazeSelectMenu;
