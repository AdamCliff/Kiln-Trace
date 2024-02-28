import Navbar from "./components/navbar.tsx";
import OptionsBar from "./components/optionsbar.tsx";
// import PiecesView from "./components/piecesView.tsx";
import NewPiece from "./components/newPiece.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-screen flex flex-grow">
        <OptionsBar />
        {/* <PiecesView /> */}
        <NewPiece />
      </div>
    </>
  );
}

export default App;
