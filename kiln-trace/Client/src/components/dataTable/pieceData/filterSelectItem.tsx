import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";

import { Preset } from "@/types/piecePresets";

function FilterSelectItem({
  preset,
  selectedFilters,
  setSelectedFilters,
}: {
  preset: Preset;
  selectedFilters: string;
  setSelectedFilters: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { preset: presetName } = preset;

  const [isChecked, setIsChecked] = useState<boolean>(
    selectedFilters?.includes(presetName)
  );

  const handleCheckedChange = () => {
    // reverse checked state
    let check = !isChecked;
    setIsChecked(check);
    // update filters based on checked state
    let newFilters = "";
    if (check) {
      newFilters = `${selectedFilters && selectedFilters}${selectedFilters && check && ","}${presetName}`;
    } else {
      newFilters = selectedFilters.replace(preset.preset, "");
      // if a comma is at the beginning or end of the filters list, remove it
      if (newFilters.charAt(newFilters.length - 1) === ",")
        newFilters = newFilters.slice(0, -1);
      if (newFilters.charAt(0) === ",") newFilters = newFilters.slice(1);
    }
    setSelectedFilters(newFilters);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    handleCheckedChange();
  };

  return (
    <>
      <div className="bg-accent rounded w-full h-fit hover:bg-opacity-80">
        <label
          htmlFor={presetName}
          className="relative block w-full h-full p-1 pl-3 rounded cursor-pointer"
          onClick={(e) => handleClick(e)}
        >
          <span className="text-text font-medium">{presetName}</span>
          <Checkbox
            checked={isChecked}
            onCheckedChange={handleCheckedChange}
            name={presetName}
            className="absolute right-2 top-[50%] -translate-y-1/2 rounded bg-background"
          />
        </label>
      </div>
    </>
  );
}

export default FilterSelectItem;
