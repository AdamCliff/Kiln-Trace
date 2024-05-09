import { useEffect } from "react";

import { Piece } from "@/types/piece";
import StageDatePicker from "./stageDatePicker";
import StagePicker from "./stagePicker";

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
      <div id="stage" className="flex items-center justify-center gap-6">
        <StagePicker
          stage={formed}
          stageName="formed"
          stageDate={formedDate}
          stageDateName="formedDate"
          updatePiece={updatePiece}
        />
        <StagePicker
          stage={trimmed}
          stageName="trimmed"
          stageDate={trimmedDate}
          stageDateName="trimmedDate"
          updatePiece={updatePiece}
        />
        <StagePicker
          stage={bisqued}
          stageName="bisqued"
          stageDate={bisquedDate}
          stageDateName="bisquedDate"
          updatePiece={updatePiece}
        />
        <StagePicker
          stage={glazed}
          stageName="glazed"
          stageDate={glazedDate}
          stageDateName="glazedDate"
          updatePiece={updatePiece}
        />
        <StagePicker
          stage={fired}
          stageName="fired"
          stageDate={firedDate}
          stageDateName="firedDate"
          updatePiece={updatePiece}
        />
      </div>
    </>
  );
}

export default PieceFormStageSection;
