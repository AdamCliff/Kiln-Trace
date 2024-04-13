import { useState } from "react";

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
  const { presets: presetsList } = presetList;

  return (
    <>
      <Select
        onValueChange={(value) => {
          const presetsCopy = presets.slice();
          presetsCopy[index] = value;
          updatePiece({ [presetName]: presetsCopy });
        }}
        value={presets[index]}
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
        </SelectContent>
      </Select>
    </>
  );
}

export default GlazePresetSelectMenu;
