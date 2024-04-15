import { useState } from "react";

import { ChevronsUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

import { Presets } from "@/types/piecePresets";
import { Piece } from "@/types/piece";
import GlazePresetSelectMenu from "./glazePresetSelectMenu";

function GlazeSelectionCollapsible({
  presets,
  updatePiece,
  presetName,
  presetList,
}: {
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
  const [isOpen, setIsOpen] = useState<boolean>(presets.length > 0);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-min space-y-2"
    >
      <div className="flex items-center justify-between space-x-2 w-min">
        <GlazePresetSelectMenu
          setIsOpen={setIsOpen}
          key={0}
          index={0}
          presets={presets}
          updatePiece={updatePiece}
          presetName={presetName}
          presetList={presetList}
        />
        <Button
          variant="ghost"
          size="sm"
          className="w-9 p-0"
          disabled={presets.length === 0}
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          <ChevronsUpDown className="h-4 w-4" />
          <span className="sr-only">Toggle</span>
        </Button>
      </div>
      <CollapsibleContent className="space-y-2">
        {presets.length &&
          presets.map((_, index) => {
            if (index <= presets.length && index + 1 < 5) {
              return (
                <GlazePresetSelectMenu
                  key={index + 1}
                  setIsOpen={setIsOpen}
                  index={index + 1}
                  presets={presets}
                  updatePiece={updatePiece}
                  presetName={presetName}
                  presetList={presetList}
                />
              );
            }
          })}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default GlazeSelectionCollapsible;
