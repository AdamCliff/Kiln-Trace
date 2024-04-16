import Navbar from "../components/navbar.tsx";
import DataPanel from "../components/dataPanel.tsx";

function Dashboard() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen divide-x divide-primary p-2 bg-background">
        <Navbar />
        <DataPanel />
      </div>
    </>
  );
}

export default Dashboard;
