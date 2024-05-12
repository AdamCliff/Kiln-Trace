import { Input } from "@/components/ui/input";

import { usePresetsContext } from "@/context/presetsContext";
import { PiecePresets } from "@/types/piecePresets";
import FilterSelectItem from "./filterSelectItem";

function FilterSelector({
  filterTarget,
}: {
  filterTarget:
    | "formPresets"
    | "glazePresets"
    | "materialPresets"
    | "methodPresets"
    | "underglazePresets"
    | "slipPresets";
}) {
  const { presets }: { presets: PiecePresets | undefined; dispatch: any } =
    usePresetsContext();

  const targetPresets = presets?.[filterTarget];

  // console.log(targetPresets);
  // targetPresets?.map((preset) => {
  //   console.log(preset);
  //   console.log(typeof preset);
  //   console.log(preset.preset);
  //   console.log(typeof preset.preset);
  // });

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1 w-full">
        {targetPresets &&
          targetPresets.map((preset) => {
            const presetName = preset.preset;
            return <FilterSelectItem key={preset._id} preset={preset} />;
          })}
      </div>
    </>
  );
}

export default FilterSelector;
