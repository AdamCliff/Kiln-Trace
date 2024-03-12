import { PieceContextProvider } from "../context/piecesContext";
import PiecesList from "./piecesList";
import PiecesListHeader from "./piecesListHeader";

function PieceData() {
  return (
    <>
      <div id="pieces-list-container" className="p-4 h-full w-full">
        <PieceContextProvider>
          <PiecesListHeader />
          <div id="pieces-list" className="h-[92.5%]">
            <PiecesList />
          </div>
        </PieceContextProvider>
      </div>
    </>
  );
}

export default PieceData;
