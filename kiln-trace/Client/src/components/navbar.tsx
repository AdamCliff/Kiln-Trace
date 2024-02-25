import "../index.css";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar flex items-center justify-between py-4 px-8 border-b-2 border-red">
        <img src={logo} alt="kiln trace logo" className="w-14" />
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
            stroke-width="2"
            stroke="currentColor"
            className="w-10 stroke-red"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
