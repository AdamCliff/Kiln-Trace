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
          className="w-full h-full"
        >
          <DialogTrigger className="w-min h-min px-2 hover:bg-accent">
            +
          </DialogTrigger>
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
