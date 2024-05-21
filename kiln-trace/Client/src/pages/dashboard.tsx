import { useEffect, useState } from "react";
import Navbar from "../components/navbar.tsx";
import MobileNavbar from "@/components/mobileNav.tsx";
import DataPanel from "../components/dataPanel.tsx";

function Dashboard() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // handle layout based on viewport
  useEffect(() => {
    // Function to update viewport width in state
    const updateViewportWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    // Add event listener to update viewport width on resize
    window.addEventListener("resize", updateViewportWidth);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  return (
    <>
      <div className="relative flex items-center justify-center h-screen w-screen border-t-4 border-primary bg-background overflow-hidden md:flex-col-reverse">
        {viewportWidth > 1024 ? <Navbar /> : <MobileNavbar />}
        <DataPanel />
      </div>
    </>
  );
}

export default Dashboard;
