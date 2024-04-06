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
}: {
  presetName: string;
  presetCategory: string;
  handleSubmit: (
    presetName: string | undefined,
    presetCategory: string
  ) => Promise<void>;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full h-full">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="w-full h-full hover:bg-accent">
            +
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>{"Enter new " + presetName}</DialogHeader>
            <PresetDialogContents
              setIsOpen={setIsOpen}
              presetName={presetName}
              presetCategory={presetCategory}
              handleSubmit={handleSubmit}
            />
          </DialogContent>
        </Dialog>
      </button>
    </>
  );
}

export default PresetDialog;
