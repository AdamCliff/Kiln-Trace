import OptionsBar from "./optionsbar";
import PiecesList from "./piecesList";

function PiecesView() {
  return (
    <>
      <div
        id="pieces-view"
        className="flex items-center justify-start flex-col gap-6 w-[90%] h-full"
      >
        <section
          id="options-bar-section"
          className="flex items-center justify-center w-full h-[5%] bg-background rounded-xl"
        >
          <OptionsBar />
        </section>
        <section
          id="pieces-section"
          className="w-full h-[95%] bg-background rounded-xl"
        >
          <div id="pieces-list-container" className="p-4 h-full w-full">
            <header
              id="piece-list-header"
              className="flex items-center justify-between px-8 h-[7.5%]"
            >
              <h2 id="piece-list-title" className="text-3xl text-text">
                Pieces
              </h2>
              <div
                id="piece-counters"
                className="flex items-center justify-center divide-x divide-secondary"
              >
                <div id="unfinished-counter" className="pr-4">
                  <h3 id="unfinished-number"># undone</h3>
                  <span id="unfinished-number-title">Unfinished</span>
                </div>
                <div id="finished-counter" className="pl-4">
                  <h3 id="unfinished-number"># done</h3>
                  <span id="unfinished-number-title">Finished</span>
                </div>
              </div>
            </header>
            <div id="pieces-list" className="h-[92.5%]">
              <PiecesList />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PiecesView;
