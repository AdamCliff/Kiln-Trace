import { useEffect, useRef } from "react";

import PiecesDataTable from "./piecesDataTable";

import { Piece } from "@/types/piece";
import { pieceColumns } from "./pieceTableColumns";
import { usePieceContext } from "@/context/piecesContext";
import { usePresetsContext } from "@/context/presetsContext";
import { actionTypes } from "@/context/pieceActionEnums";
import { presetActionTypes } from "@/context/presetActionEnums";
import {
  handleGetPresets,
  // handleSetDefaultPresets,
} from "@/helpers/presetHelperFunctions";
import { handleLoadPieces } from "@/helpers/pieceHelperFunctions";

function PiecesList() {
  const { pieces, dispatch } = usePieceContext();
  const { presets, dispatch: presetsDispatch } = usePresetsContext();

  // load pieces
  const shouldRun = useRef(true);
  useEffect(() => {
    if (shouldRun.current) {
      shouldRun.current = false;
      const fetchData = async () => {
        try {
          await handleLoadPieces(dispatch);
        } catch (error) {
          console.error(`Failed to fetch piece list: ${error}`);
        }
      };

      fetchData();
    }
  }, [pieces]);

  // laod presets
  const shouldRun2 = useRef(true);
  useEffect(() => {
    if (shouldRun2.current) {
      shouldRun2.current = false;
      const setData = async () => {
        try {
          const [presets] = await handleGetPresets();
          presetsDispatch({
            type: presetActionTypes.LOAD_PRESETS,
            payload: presets,
          });
        } catch (error) {
          console.error(`Failed to get presets: ${error}`);
        }
      };

      setData();
    }
  }, [presets]);

  return (
    <>
      <div className="w-full h-full">
        <PiecesDataTable columns={pieceColumns} data={pieces} />
      </div>
    </>
  );
}

export default PiecesList;
