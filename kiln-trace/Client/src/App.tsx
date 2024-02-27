import { useEffect } from "react";

import "./App.css";

import Navbar from "./components/navbar.tsx";
import OptionsBar from "./components/optionsbar.tsx";
import PiecesView from "./components/piecesView.tsx";

function App() {
  // test for back end connection
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newPiece = () => {
    useEffect(() => {
      fetch("http://localhost:3000/piece");
    });
  };

  return (
    <>
      <Navbar />
      <div className="main-screen flex flex-grow">
        <OptionsBar />
        <PiecesView />
        <button onClick={newPiece}>new piece</button>
      </div>
    </>
  );
}

export default App;
