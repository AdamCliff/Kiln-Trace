import { useEffect, useState } from "react";

import { usePresetsContext } from "@/context/presetsContext";
import { PiecePresets } from "@/types/piecePresets";
import FilterSelectItem from "./filterSelectItem";
import { useFiltersContext } from "@/context/pieceFilterContext";
import { RadioGroup } from "@/components/ui/radio-group";

function FilterSelector({
  isAny,
  presetTarget,
  filterTarget,
  presetCategory,
  handleFilterChange,
}: {
  isAny: boolean;
  presetTarget:
    | "stagePresets"
    | "formPresets"
    | "glazePresets"
    | "materialPresets"
    | "methodPresets"
    | "underglazePresets"
    | "slipPresets";
  filterTarget:
    | "stageFilters"
    | "formFilters"
    | "glazeFilters"
    | "materialFilters"
    | "methodFilters"
    | "underglazeFilters"
    | "slipFilters";
  presetCategory: string;
  handleFilterChange: (id: string, value: string) => void;
}) {
  const { presets }: { presets: PiecePresets | undefined } =
    usePresetsContext();
  const { filters } = useFiltersContext();

  const targetPresets = presets?.[presetTarget];

  const [selectedFilters, setSelectedFilters] = useState<string>(
    (filters as any)?.[filterTarget]
  );

  useEffect(() => {
    handleFilterChange(presetCategory, selectedFilters);
  }, [selectedFilters]);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-1 w-full">
        {targetPresets &&
          targetPresets.map((preset) => {
            return (
              <FilterSelectItem
                key={preset._id}
                isAny={isAny}
                preset={preset}
                presetCategory={presetCategory}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
              />
            );
          })}
      </div>
    </>
  );
}

export default FilterSelector;
