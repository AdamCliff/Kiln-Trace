import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";

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
            {/* <img
            src={logo}
            alt="kiln trace logo"
            id="nav-header-logo"
            className="w-8"
          /> */}
          </header>
          <div
            id="nav-routes"
            className="flex items-start justify-start flex-col gap-4 w-full py-8 px-2 border-b border-secondary"
          >
            <Link to={"/"} id="pieces-route" className="nav-link">
              Pieces
            </Link>
            <Link to={"/"} id="glaze-route" className="nav-link">
              Glazes
            </Link>
            <Link to={"/"} id="schedules-route" className="nav-link">
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

{
  /* <img src={logo} alt="kiln trace logo" className="w-14" />
        <div className="flex items-center justify-center gap-14">
          <a href="#" className="nav-link">
            Glazes
          </a>
          <a href="#" className="nav-link">
            Pieces
          </a>
          <a href="#" className="nav-link">
            Routines
          </a>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-10 stroke-red"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button> */
}
