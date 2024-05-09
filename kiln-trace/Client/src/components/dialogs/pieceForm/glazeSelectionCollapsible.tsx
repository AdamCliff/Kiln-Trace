import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

import { Presets } from "@/types/piecePresets";
import { Piece } from "@/types/piece";
import GlazePresetSelectMenu from "./glazePresetSelectMenu";

function GlazeSelectionCollapsible({
  isOpen,
  setIsOpen,
  selectedPresets,
  updatePiece,
  presetName,
  presetOptionList,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2 transition-all"
    >
      <div className="flex items-center justify-between space-x-2 w-full">
        <GlazePresetSelectMenu
          setIsOpen={setIsOpen}
          key={0}
          index={0}
          presets={selectedPresets}
          updatePiece={updatePiece}
          presetName={presetName}
          presetOptionList={presetOptionList}
        />
      </div>
      <CollapsibleContent className="space-y-2 CollapsibleContent">
        {selectedPresets.length &&
          selectedPresets.map((_, index) => {
            if (index <= selectedPresets.length && index + 1 < 5) {
              return (
                <GlazePresetSelectMenu
                  key={index + 1}
                  setIsOpen={setIsOpen}
                  index={index + 1}
                  presets={selectedPresets}
                  updatePiece={updatePiece}
                  presetName={presetName}
                  presetOptionList={presetOptionList}
                />
              );
            }
          })}
      </CollapsibleContent>
    </Collapsible>
  );
}

export default GlazeSelectionCollapsible;
