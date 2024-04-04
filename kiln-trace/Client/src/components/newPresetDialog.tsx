import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
} from "@/components/ui/dialog";

import NewPresetDialogContents from "./newPresetDialogContents";

function NewPresetDialog({ presetName }: { presetName: string }) {
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
            <NewPresetDialogContents
              setIsOpen={setIsOpen}
              presetName={presetName}
            />
          </DialogContent>
        </Dialog>
      </button>
    </>
  );
}

export default NewPresetDialog;
