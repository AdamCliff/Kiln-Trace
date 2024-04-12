import React, { useState } from "react";

function PresetDialogContents({
  setIsOpen,
  presetName,
  presetCategory,
  handleSubmit,
  dispatch,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  presetName: string;
  presetCategory: string;
  handleSubmit: (
    preset: string | undefined,
    presetCategory: string,
    dispatch: React.Dispatch<any>
  ) => Promise<void>;
  dispatch: React.Dispatch<any>;
}) {
  const [preset, setPreset] = useState<string>("");

  return (
    <>
      <form action="/presets" method="POST" className="flex flex-col gap-2">
        <input
          type="text"
          placeholder={"New " + presetName + " name..."}
          name="preset"
          id="preset"
          onChange={(e) => {
            e.stopPropagation();
            setPreset(e.target.value);
          }}
          value={preset}
          className="p-2"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(preset, presetCategory, dispatch);
            setIsOpen(false);
          }}
          className="m-auto bg-secondary text-background h-min w-min py-2 px-4 mt-4 rounded-xl"
        >
          Save
        </button>
      </form>
    </>
  );
}

export default PresetDialogContents;
