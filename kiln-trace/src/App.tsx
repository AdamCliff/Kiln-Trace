import "./App.css";

import Navbar from "./components/navbar.tsx";
import OptionsBar from "./components/optionsbar.tsx";
import PiecesView from "./components/piecesView.tsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-screen flex flex-grow">
        <OptionsBar />
        <PiecesView />
      </div>
    </>
  );
}

export default App;
