import { useEffect, useRef } from "react";

import PiecesDataTable from "../dataTable/pieceData/piecesDataTable";

import { pieceColumns } from "../dataTable/pieceData/pieceTableColumns";
import { usePieceContext } from "@/context/piecesContext";
import { usePresetsContext } from "@/context/presetsContext";
import { handleLoadPresets } from "@/helpers/presetHelperFunctions";
import { handleLoadPieces } from "@/helpers/pieceHelperFunctions";

function PiecesList() {
  const { pieces, dispatch } = usePieceContext();
  const { presets, dispatch: presetsDispatch } = usePresetsContext();

  // load pieces
  const shouldRun = useRef(true);
  useEffect(() => {
    (async () => {
      if (shouldRun.current) {
        shouldRun.current = false;
        const fetchData = async () => {
          try {
            await handleLoadPieces(dispatch);
          } catch (error) {
            console.error(`Failed to fetch piece list: ${error}`);
          }
        };

        await fetchData();
      }
    })();
  }, [pieces]);

  // laod presets
  const shouldRun2 = useRef(true);
  useEffect(() => {
    if (shouldRun2.current) {
      shouldRun2.current = false;
      const setData = async () => {
        try {
          await handleLoadPresets(presetsDispatch);
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
