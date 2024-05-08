import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";

import PresetDialogContents from "./presetDialogContents";

function PresetDialog({
  presetName,
  presetCategory,
  handleSubmit,
  dispatch,
}: {
  presetName: string;
  presetCategory: string;
  handleSubmit: (
    presetName: string | undefined,
    presetCategory: string,
    dispatch: React.Dispatch<any>
  ) => Promise<void>;
  dispatch: React.Dispatch<any>;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          className="w-full h-full p-1 rounded shadow-custom hover:bg-accent bg-accent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4 stroke-text"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
        <DialogContent>
          <DialogHeader>{"Enter new " + presetName}</DialogHeader>
          <PresetDialogContents
            setIsOpen={setIsOpen}
            presetName={presetName}
            presetCategory={presetCategory}
            handleSubmit={handleSubmit}
            dispatch={dispatch}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PresetDialog;
