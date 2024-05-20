import Navbar from "../components/navbar.tsx";
import DataPanel from "../components/dataPanel.tsx";

function Dashboard() {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen w-screen border-t-4 border-primary bg-background overflow-hidden md:flex-col-reverse">
        <Navbar />
        <DataPanel />
      </div>
    </>
  );
}

export default Dashboard;
