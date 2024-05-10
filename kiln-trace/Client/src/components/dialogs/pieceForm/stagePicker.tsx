import StageDatePicker from "@/components/dialogs/pieceForm/stageDatePicker";
import { Checkbox } from "@/components/ui/checkbox";
import { Piece } from "@/types/piece";

function StagePicker({
  stage,
  stageName,
  stageDate,
  stageDateName,
  updatePiece,
}: {
  stage: boolean;
  stageName: string;
  stageDate: Date | undefined;
  stageDateName: string;
  updatePiece: (updatedPiece: Partial<Piece>) => void;
}) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full text-field !shadow-custom-sm !bg-opacity-25 px-3 py-1">
        <div className="flex justify-start items-center gap-2">
          <label
            htmlFor={`${stageName}-stage`}
            className=" relative flex justify-start items-center gap-2 capitalize cursor-pointer"
          >
            <Checkbox
              checked={stage}
              onCheckedChange={(e) => {
                const isChecked = e;
                updatePiece({ [stageName]: isChecked });
                updatePiece({
                  [stageDateName]: isChecked ? new Date() : undefined,
                });
              }}
              aria-label="Select All"
              name={stageName}
              id={`${stageName}-stage`}
              className="rounded !w-[0.875rem] !h-[0.875rem]"
            />
            {stageName}
          </label>
        </div>
        <StageDatePicker
          isStageSelected={stage}
          stageDate={stageDate}
          stageDateName={stageDateName}
          updateDate={updatePiece}
        />
      </div>
    </>
  );
}

export default StagePicker;
