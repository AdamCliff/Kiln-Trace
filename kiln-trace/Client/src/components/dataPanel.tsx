import { Route, Routes, Navigate } from "react-router-dom";

import PieceData from "./pieceRoute/pieceData";

function DataPanel() {
  return (
    <>
      <div
        id="data-panel"
        className="flex items-center justify-start flex-col gap-6 w-[90%] h-full"
      >
        <section
          id="data-section"
          className="w-full h-full bg-background rounded-xl"
        >
          <Routes>
            <Route path="/" element={<Navigate to={"/pieces"} />} />
            <Route path="/pieces" element={<PieceData />} />
            <Route path="/glazes" />
            <Route path="/schedules" />
          </Routes>
        </section>
      </div>
    </>
  );
}

export default DataPanel;
