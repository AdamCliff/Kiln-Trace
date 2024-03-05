import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="flex items-center justify-between flex-col h-[100%] w-[10%] p-4 rounded-xl bg-background"
      >
        <section id="nav-top" className="w-full">
          <header
            id="nav-header"
            className="flex items-center justify-between w-full h-fit p-2 border-b border-secondary"
          >
            <h2
              id="nav-header-title"
              className="uppercase text-2xl font-bold text-secondary"
            >
              Kiln Trace
            </h2>
          </header>
          <div
            id="nav-routes"
            className="flex items-start justify-start flex-col gap-4 w-full py-8 px-2 border-b border-secondary"
          >
            <Link to={"/pieces"} id="pieces-route" className="nav-link">
              Pieces
            </Link>
            <Link to={"/glazes"} id="glaze-route" className="nav-link">
              Glazes
            </Link>
            <Link to={"/schedules"} id="schedules-route" className="nav-link">
              Schedules
            </Link>
          </div>
          <div
            id="nav-saved-sorts"
            className="flex items-start justify-start flex-col gap-4 w-full py-8 px-2 border-b border-secondary"
          >
            <button
              id="save-sort-btn"
              className="py-2 px-4 bg-secondary font-medium text-background rounded-xl"
            >
              Save This Sort
            </button>
          </div>
        </section>
        <section id="nav-bottom" className="w-full">
          <div
            id="account-management"
            className="flex items-center justify-between px-2"
          >
            <div id="profile" className="">
              prof
            </div>
            <button id="settings-open-btn" className="">
              Gear
            </button>
          </div>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
