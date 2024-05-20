import { PieceContextProvider } from "../../context/piecesContext";
import { PresetsContextProvider } from "../../context/presetsContext";
import { FiltersContextProvider } from "@/context/pieceFilterContext";
import PiecesList from "./piecesList";
import PiecesListHeader from "./piecesListHeader";

function PieceData() {
  return (
    <>
      <div id="pieces-list-container" className="p-4 h-full w-full">
        <PieceContextProvider>
          <PresetsContextProvider>
            <FiltersContextProvider>
              <PiecesListHeader />
              <div id="pieces-list" className="h-[92.5%] md:h-full">
                <PiecesList />
              </div>
            </FiltersContextProvider>
          </PresetsContextProvider>
        </PieceContextProvider>
      </div>
    </>
  );
}

export default PieceData;
