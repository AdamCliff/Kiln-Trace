import { useEffect, useRef } from "react";

import PiecesDataTable from "./piecesDataTable";

import { Piece } from "@/types/piece";
import { pieceColumns } from "./pieceTableColumns";
import { usePieceContext } from "@/context/piecesContext";
import { actionTypes } from "@/context/actionEnums";
import {
  handleGetPresets,
  handleSetDefaultPresets,
} from "@/helpers/presetHelperFunctions";

function PiecesList() {
  const { pieces, dispatch } = usePieceContext();

  const shouldRun = useRef(true);
  useEffect(() => {
    if (shouldRun.current) {
      shouldRun.current = false;
      const fetchData = async () => {
        try {
          const res: Response = await fetch("http://localhost:3000/pieces");
          const data: Piece[] | undefined = await res.json();

          dispatch({ type: actionTypes.LOAD_PIECES, payload: data });
        } catch (error) {
          console.error(`Failed to fetch piece list: ${error}`);
        }
      };

      fetchData();
    }
  }, [pieces]);

  const shouldRun2 = useRef(true);
  useEffect(() => {
    if (shouldRun2.current) {
      shouldRun2.current = false;
      const setData = async () => {
        try {
          await handleSetDefaultPresets();
        } catch (error) {
          console.error(`Failed to set default presets: ${error}`);
        }
      };

      setData();
    }
  }, [pieces]);

  const shouldRun3 = useRef(true);
  useEffect(() => {
    if (shouldRun3.current) {
      shouldRun3.current = false;
      const setData = async () => {
        try {
          const [presets] = await handleGetPresets();
          console.log(presets);
        } catch (error) {
          console.error(`Failed to get presets: ${error}`);
        }
      };

      setData();
    }
  }, [pieces]);

  return (
    <>
      <div className="w-full h-full">
        <PiecesDataTable columns={pieceColumns} data={pieces} />
      </div>
    </>
  );
}

export default PiecesList;
