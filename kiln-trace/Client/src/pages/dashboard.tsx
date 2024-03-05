import Navbar from "../components/navbar.tsx";
import DataPanel from "../components/dataPanel.tsx";

function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-center gap-6 h-screen w-screen p-4 bg-primary">
        <Navbar />
        <DataPanel />
      </div>
    </>
  );
}

export default Dashboard;
