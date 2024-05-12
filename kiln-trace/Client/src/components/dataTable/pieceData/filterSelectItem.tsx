import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { Preset } from "@/types/piecePresets";

function FilterSelectItem({ preset }: { preset: Preset }) {
  const { preset: presetName } = preset;

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckedChange = (e: any) => {
    console.log(e);
    setIsChecked(!isChecked);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsChecked(!isChecked);
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
            onCheckedChange={(e) => handleCheckedChange(e)}
            name={presetName}
            className="absolute right-2 top-[50%] -translate-y-1/2 rounded bg-background"
          />
        </label>
      </div>
    </>
  );
}

export default FilterSelectItem;
