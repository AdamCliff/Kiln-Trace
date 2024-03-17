import { Route, Routes, Navigate } from "react-router-dom";

import OptionsBar from "./optionsbar";
import PieceData from "./pieceData";
// import { PieceContextProvider } from "../context/piecesContext";

function DataPanel() {
  return (
    <>
      <div
        id="data-panel"
        className="flex items-center justify-start flex-col gap-6 w-[90%] h-full"
      >
        {/* <PieceContextProvider> */}
        <section
          id="options-bar-section"
          className="flex items-center justify-center w-full h-[5%] bg-background rounded-xl"
        >
          <Routes>
            <Route path="/" element={<Navigate to={"/pieces"} />} />
            <Route path="/pieces" element={<OptionsBar />} />
            <Route path="/glazes" />
            <Route path="/schedules" />
          </Routes>
        </section>
        <section
          id="data-section"
          className="w-full h-[95%] bg-background rounded-xl"
        >
          <Routes>
            <Route path="/" element={<Navigate to={"/pieces"} />} />
            <Route path="/pieces" element={<PieceData />} />
            <Route path="/glazes" />
            <Route path="/schedules" />
          </Routes>
        </section>
        {/* </PieceContextProvider> */}
      </div>
    </>
  );
}

export default DataPanel;
