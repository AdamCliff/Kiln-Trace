import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Piece } from "@/types/piece";
import { Presets } from "@/types/piecePresets";

function GlazePresetSelectMenu({
  setIsOpen,
  index,
  presets,
  updatePiece,
  presetName,
  presetList,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  const { presets: presetsList } = presetList;

  return (
    <>
      <Select
        onValueChange={(value) => {
          let presetsCopy = [...presets];
          if (value === "No Glaze") {
            // handle glaze deletions
            presetsCopy.splice(index, 1);
            presetsCopy.length === 0 && setIsOpen(false);
          } else {
            // handle glaze additions
            presetsCopy[index] = value;
            setIsOpen(true);
          }
          updatePiece({ [presetName]: presetsCopy });
        }}
        value={presets[index] || ""}
        name="piece-glaze-select-menu"
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder={"Add layer"} />
        </SelectTrigger>
        <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
          {presetsList.map((preset) => {
            const { preset: presetValue } = preset;
            return (
              <SelectItem key={preset._id} value={presetValue}>
                {presetValue}
              </SelectItem>
            );
          })}
          <SelectItem key={"delete"} value="No Glaze">
            No Glaze
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}

export default GlazePresetSelectMenu;
