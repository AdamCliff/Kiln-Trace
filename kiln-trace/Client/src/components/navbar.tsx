import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="flex items-center justify-between flex-col h-[100%] w-[10%] p-4"
      >
        <section id="nav-top" className="w-full h-full">
          <header
            id="nav-header"
            className="flex items-center justify-between w-full h-[7.5%] p-2 border-b border-primary"
          >
            <h2
              id="nav-header-title"
              className="uppercase text-2xl font-bold text-primary"
            >
              Kiln Trace
            </h2>
          </header>
          <div
            id="nav-routes"
            className="flex items-start justify-between flex-col w-full h-[15%] py-2 border-b border-primary"
          >
            <Link
              to={"/pieces"}
              id="pieces-route"
              className="nav-link relative flex items-center justify-start text-xl font-semibold pl-4 text-secondary h-full w-full rounded overflow-hidden z-10"
            >
              <span className="z-10 pointer-events-none">Pieces</span>
            </Link>
            <Link
              to={"/glazes"}
              id="glaze-route"
              className="nav-link relative flex items-center justify-start text-xl font-semibold pl-4 text-secondary h-full w-full rounded overflow-hidden z-10"
            >
              <span className="z-10 pointer-events-none">Glazes</span>
            </Link>
            <Link
              to={"/schedules"}
              id="schedules-route"
              className="nav-link relative flex items-center justify-start text-xl font-semibold pl-4 text-secondary h-full w-full rounded overflow-hidden z-10"
            >
              <span className="z-10 pointer-events-none">Schedules</span>
            </Link>
          </div>
          <div
            id="nav-saved-sorts"
            className="flex items-start justify-start flex-col gap-4 w-full py-8 px-2 border-b border-primary"
          >
            <button
              id="save-sort-btn"
              className="py-2 px-4 bg-primary font-medium text-background rounded-xl"
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
