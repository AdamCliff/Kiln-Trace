import { useState } from "react";

import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Presets } from "@/types/piecePresets";
import { Piece } from "@/types/piece";
import GlazePresetSelectMenu from "./glazePresetSelectMenu";

function GlazeSelectionCollapsible({
  index,
  presets,
  updatePiece,
  presetName,
  presetList,
}: {
  index: number;
  presets: string[];
  updatePiece: (updatedPiece: Partial<Piece>) => void;
  presetName:
    | "innerGlaze"
    | "innerUnderglaze"
    | "innerSlip"
    | "outerGlaze"
    | "outerUnderglaze"
    | "outerSlip";
  presetList: Presets;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between space-x-4 w-min">
        <CollapsibleTrigger asChild>
          <>
            <GlazePresetSelectMenu
              index={index}
              presets={presets}
              updatePiece={updatePiece}
              presetName={presetName}
              presetList={presetList}
            />
            <Button
              variant="ghost"
              size="sm"
              className="w-9 p-0"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
            >
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="space-y-2">
        <GlazePresetSelectMenu
          index={index}
          presets={presets}
          updatePiece={updatePiece}
          presetName={presetName}
          presetList={presetList}
        />
      </CollapsibleContent>
    </Collapsible>
  );
}

export default GlazeSelectionCollapsible;
