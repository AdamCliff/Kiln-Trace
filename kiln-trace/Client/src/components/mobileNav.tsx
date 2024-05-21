import { useState } from "react";

import { NavLink } from "react-router-dom";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        id="mobile-navbar"
        className={
          isOpen
            ? "absolute bottom-0 right-0 flex items-center justify-between flex-col p-4 bg-background z-50 w-full h-full transition-all"
            : "absolute z-0 w-0 h-0 bottom-8 right-8 rounded-t-full rounded-l-full overflow-hidden transition-all"
        }
      >
        <header
          id="nav-header"
          className="flex items-center justify-center w-full h-fit mt-2 border-b border-primary md:border-none md:w-fit md:whitespace-nowrap"
        >
          <h2
            id="nav-header-title"
            className={
              isOpen
                ? "uppercase text-2xl font-bold text-text md:text-lg"
                : "hidden"
            }
          >
            Kiln Trace
          </h2>
        </header>
        <div
          id="nav-routes"
          className={
            isOpen
              ? "flex items-center justify-center flex-col gap-4 w-fit h-fit my-auto"
              : "hidden"
          }
        >
          <NavLink
            to={"/pieces"}
            id="pieces-route"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "nav-link bg-primary shadow-custom-lg text-2xl"
                : "nav-link text-2xl"
            }
          >
            <span className="z-10 pointer-events-none">Pieces</span>
          </NavLink>
          <NavLink
            to={"/glazes"}
            id="glaze-route"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "nav-link bg-primary shadow-custom-lg text-2xl"
                : "nav-link text-2xl"
            }
          >
            <span className="z-10 pointer-events-none">Glazes</span>
          </NavLink>
          <NavLink
            to={"/schedules"}
            id="schedules-route"
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? "nav-link bg-primary shadow-custom-lg text-2xl"
                : "nav-link text-2xl"
            }
          >
            <span className="z-10 pointer-events-none">Schedules</span>
          </NavLink>
        </div>
      </nav>
      <button
        id="nav-toggle"
        className="absolute bottom-0 right-0 p-2 rounded-full bg-accent shadow-custom-lg -translate-x-[50%] -translate-y-[50%] z-50"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </>
  );
}

export default MobileNavbar;
