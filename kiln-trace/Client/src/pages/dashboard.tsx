import Navbar from "../components/navbar.tsx";
import OptionsBar from "../components/optionsbar.tsx";
import PiecesView from "../components/piecesView.tsx";
import NewPiece from "../components/newPiece.tsx";

function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-center gap-6 h-screen w-screen p-4 bg-primary">
        <Navbar />
        <PiecesView />
      </div>
    </>
  );
}

export default Dashboard;
