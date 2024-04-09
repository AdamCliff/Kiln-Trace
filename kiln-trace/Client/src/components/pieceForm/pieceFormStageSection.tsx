import { useEffect } from "react";

import { Piece } from "@/types/piece";
import StageDatePicker from "../ui/stageDatePicker";

function PieceFormStageSection({
  piece,
  updatePiece,
}: {
  piece: Piece;
  updatePiece: (updatedPiece: Partial<Piece>) => void;
}) {
  const {
    formed,
    formedDate,
    trimmed,
    trimmedDate,
    bisqued,
    bisquedDate,
    glazed,
    glazedDate,
    fired,
    firedDate,
  } = piece;

  // if a date for stage completion is chosen before the stage box is checked, automatically set the date to new Date and check stage box
  useEffect(() => {
    formedDate && !formed ? updatePiece({ formed: !formed }) : "";
  }, [formedDate]);
  useEffect(() => {
    trimmedDate && !trimmed ? updatePiece({ trimmed: !trimmed }) : "";
  }, [trimmedDate]);
  useEffect(() => {
    bisquedDate && !bisqued ? updatePiece({ bisqued: !bisqued }) : "";
  }, [bisquedDate]);
  useEffect(() => {
    glazedDate && !glazed ? updatePiece({ glazed: !glazed }) : "";
  }, [glazedDate]);
  useEffect(() => {
    firedDate && !fired ? updatePiece({ fired: !fired }) : "";
  }, [firedDate]);

  return (
    <>
      {/* stage section */}
      <div id="stage" className="flex items-center justify-start gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <input
              type="checkbox"
              name="formed"
              id="formed-stage"
              onChange={(e) => {
                const isChecked = e.target.checked;
                updatePiece({ formed: isChecked });
                updatePiece({
                  formedDate: isChecked ? new Date() : undefined,
                });
              }}
              checked={formed}
              className="border border-secondary rounded-[6px] px-2 py-1"
            />
            <label htmlFor="formed">Formed</label>
          </div>
          <StageDatePicker
            isStageSelected={formed}
            stageDate={formedDate}
            stageDateName={"formedDate"}
            updateDate={updatePiece}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <input
              type="checkbox"
              name="trimmed"
              id="trimmed-stage"
              onChange={(e) => {
                const isChecked = e.target.checked;
                updatePiece({ trimmed: isChecked });
                updatePiece({
                  trimmedDate: isChecked ? new Date() : undefined,
                });
              }}
              checked={trimmed}
              className="border border-secondary rounded-[6px] px-2 py-1"
            />
            <label htmlFor="trimmed">Trimmed</label>
          </div>
          <StageDatePicker
            isStageSelected={trimmed}
            stageDate={trimmedDate}
            stageDateName="trimmedDate"
            updateDate={updatePiece}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <input
              type="checkbox"
              name="bisqued"
              id="bisqued-stage"
              onChange={(e) => {
                const isChecked = e.target.checked;
                updatePiece({ bisqued: isChecked });
                updatePiece({
                  bisquedDate: isChecked ? new Date() : undefined,
                });
              }}
              checked={bisqued}
              className="border border-secondary rounded-[6px] px-2 py-1"
            />
            <label htmlFor="bisqued">Bisqued</label>
          </div>
          <StageDatePicker
            isStageSelected={bisqued}
            stageDate={bisquedDate}
            stageDateName="bisquedDate"
            updateDate={updatePiece}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <input
              type="checkbox"
              name="glazed"
              id="glazed-stage"
              onChange={(e) => {
                const isChecked = e.target.checked;
                updatePiece({ glazed: isChecked });
                updatePiece({
                  glazedDate: isChecked ? new Date() : undefined,
                });
              }}
              checked={glazed}
              className="border border-secondary rounded-[6px] px-2 py-1"
            />
            <label htmlFor="glazed">Glazed</label>
          </div>
          <StageDatePicker
            isStageSelected={glazed}
            stageDate={glazedDate}
            stageDateName="glazedDate"
            updateDate={updatePiece}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2">
            <input
              type="checkbox"
              name="fired"
              id="fired-stage"
              onChange={(e) => {
                const isChecked = e.target.checked;
                updatePiece({ fired: isChecked });
                updatePiece({
                  firedDate: isChecked ? new Date() : undefined,
                });
              }}
              checked={fired}
              className="border border-secondary rounded-[6px] px-2 py-1"
            />
            <label htmlFor="fired">Fired</label>
          </div>
          <StageDatePicker
            isStageSelected={fired}
            stageDate={firedDate}
            stageDateName="firedDate"
            updateDate={updatePiece}
          />
        </div>
      </div>
    </>
  );
}

export default PieceFormStageSection;
