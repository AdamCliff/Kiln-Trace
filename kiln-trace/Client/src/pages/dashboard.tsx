import Navbar from "../components/navbar.tsx";
import DataPanel from "../components/dataPanel.tsx";

function Dashboard() {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen w-screen divide-x divide-primary p-2 bg-background overflow-hidden">
        <Navbar />
        <DataPanel />
      </div>
    </>
  );
}

export default Dashboard;
