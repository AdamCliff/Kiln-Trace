import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";

import { Preset } from "@/types/piecePresets";

function FilterSelectItem({
  preset,
  presetCategory,
  isAny,
  selectedFilters,
  setSelectedFilters,
}: {
  preset: Preset;
  presetCategory: string;
  isAny: boolean;
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
      // if a comma is at the beginning or end of the filters list or if there are two commas adjacent, remove it
      if (newFilters.charAt(newFilters.length - 1) === ",")
        newFilters = newFilters.slice(0, -1);
      if (newFilters.charAt(0) === ",") newFilters = newFilters.slice(1);
      if (newFilters.includes(",,")) newFilters.replace(",,", "");
    }
    setSelectedFilters(newFilters);
  };

  const handleRadioChange = () => {
    selectedFilters !== presetName
      ? setSelectedFilters(presetName)
      : setSelectedFilters("");
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    !isAny ||
    presetCategory === "glaze" ||
    presetCategory === "underglaze" ||
    presetCategory === "slip"
      ? handleCheckedChange()
      : handleRadioChange();
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
          {!isAny ||
          presetCategory === "glaze" ||
          presetCategory === "underglaze" ||
          presetCategory === "slip" ? (
            <Checkbox
              checked={isChecked}
              onCheckedChange={handleCheckedChange}
              name={presetName}
              className="absolute right-2 top-[50%] -translate-y-1/2 rounded bg-background"
            />
          ) : (
            <input
              type="radio"
              value={presetName}
              onChange={handleRadioChange}
              className={`absolute right-2 top-[50%] -translate-y-1/2 rounded-full bg-background w-4 h-4 cursor-pointer appearance-none border border-text ${presetName === selectedFilters ? "bg-primary outline outline-2 -outline-offset-[3px] outline-background" : ""}`}
            />
          )}
        </label>
      </div>
    </>
  );
}

export default FilterSelectItem;
