import { useState } from "react";

import { DialogClose } from "@/components/ui/dialog";

import { handleNewPreset } from "@/helpers/presetHelperFunctions";

function NewPresetDialogContents({
  setIsOpen,
  presetName,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  presetName: string;
}) {
  const [preset, setPreset] = useState<string>();

  return (
    <>
      <div>
        <form action="#" className="flex flex-col gap-2">
          <input
            type="text"
            placeholder={"New " + presetName + " name..."}
            name="preset"
            id="preset"
            onChange={(e) => setPreset(e.target.value)}
            value={preset}
            className="p-2"
          />
          <DialogClose asChild>
            <button
              onClick={() => setIsOpen(false)}
              className="m-auto bg-secondary text-background h-min w-min py-2 px-4 mt-4 rounded-xl"
            >
              Save
            </button>
          </DialogClose>
        </form>
      </div>
    </>
  );
}

export default NewPresetDialogContents;
