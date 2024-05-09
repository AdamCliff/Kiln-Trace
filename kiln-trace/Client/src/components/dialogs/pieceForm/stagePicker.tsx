import StageDatePicker from "@/components/dialogs/pieceForm/stageDatePicker";
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
            <input
              type="checkbox"
              name={stageName}
              id={`${stageName}-stage`}
              onChange={(e) => {
                const isChecked = e.target.checked;
                updatePiece({ [stageName]: isChecked });
                updatePiece({
                  [stageDateName]: isChecked ? new Date() : undefined,
                });
              }}
              checked={stage}
              className="relative peer appearance-none w-[0.875rem] h-[0.875rem] bg-background border border-text rounded checked:bg-accent cursor-pointer"
            />
            {stageName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-[0.875rem] h-[0.875rem] hidden peer-checked:block fill-background absolute top-2/4 -translate-y-1/2"
            >
              <rect width="256" height="256" fill="none" />
              <path
                d="M104,147.43l98.34-97.09a8,8,0,0,1,11.32,0l24,23.6a8,8,0,0,1,0,11.32l-128.4,128.4a8,8,0,0,1-11.32,0l-71.6-72a8,8,0,0,1,0-11.31l24-24a8,8,0,0,1,11.32,0Z"
                fill="background"
                stroke="primary"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
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
