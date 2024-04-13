import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Piece } from "@/types/piece";
import { Presets } from "@/types/piecePresets";

function PresetSelectMenu({
  preset,
  setPreset,
  presetName,
  presetList,
}: {
  preset: string;
  setPreset: (updatedPiece: Partial<Piece>) => void;
  presetName: string;
  presetList: Presets;
}) {
  const { presets } = presetList;

  return (
    <>
      <Select
        onValueChange={(value) => setPreset({ [presetName]: value })}
        value={preset}
        name="piece-select-menu"
      >
        <SelectTrigger className="w-40">
          <SelectValue placeholder={`Select a ${presetName}`} />
        </SelectTrigger>
        <SelectContent onCloseAutoFocus={(e) => e.preventDefault()}>
          {presets.map((preset) => {
            const { preset: presetValue } = preset;
            return (
              <SelectItem key={preset._id} value={presetValue}>
                {presetValue}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
}

export default PresetSelectMenu;
