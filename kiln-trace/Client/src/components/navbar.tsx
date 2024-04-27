import { NavLink } from "react-router-dom";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Navbar() {
  return (
    <>
      <nav
        id="navbar"
        className="flex items-center justify-start flex-col h-full w-[10%] p-4 bg-accent shadow-primary shadow-[inset_-10px_0px_15px_-12px_#00000024]"
      >
        <header
          id="nav-header"
          className="flex items-center justify-between w-full h-[7.5%] p-2 border-b border-primary"
        >
          <h2
            id="nav-header-title"
            className="uppercase text-2xl font-bold text-text"
          >
            Kiln Trace
          </h2>
        </header>
        <div
          id="nav-routes"
          className="flex items-start justify-between flex-col w-full h-[15%] py-4 border-b border-primary"
        >
          <NavLink
            to={"/pieces"}
            id="pieces-route"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "nav-link bg-primary shadow-custom-lg" : "nav-link"
            }
          >
            <span className="z-10 pointer-events-none">Pieces</span>
          </NavLink>
          <NavLink
            to={"/glazes"}
            id="glaze-route"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "nav-link bg-primary shadow-custom-lg" : "nav-link"
            }
          >
            <span className="z-10 pointer-events-none">Glazes</span>
          </NavLink>
          <NavLink
            to={"/schedules"}
            id="schedules-route"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "nav-link bg-primary shadow-custom-lg" : "nav-link"
            }
          >
            <span className="z-10 pointer-events-none">Schedules</span>
          </NavLink>
        </div>
        <div
          id="nav-saved-sorts"
          className="flex items-start justify-start flex-col gap-4 w-full py-8 px-2 border-b border-primary"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  id="save-sort-btn"
                  className="py-2 px-4 bg-primary text-text font-semibold rounded shadow-custom-lg"
                >
                  Save This Sort
                </button>
              </TooltipTrigger>
              <TooltipContent
                className="bg-background border border-primary rounded"
                align="start"
                alignOffset={8}
                sideOffset={12}
              >
                <p className="text-regular font-semibold">
                  Save your current dashboard as a profile for quick access
                  later!
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div
          id="account-management"
          className="flex items-center justify-around w-full mt-auto py-6"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <button
              id="profile-open-btn"
              className="bg-primary bg-opacity-80 rounded-full shadow-custom-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.25"
                stroke="currentColor"
                className="w-10 h-10 stroke-text"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            <span className="text-text text-opacity-90 font-semibold text-sm pointer-events-none">
              Profile
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <button
              id="settings-open-btn"
              className="bg-primary bg-opacity-80 rounded-full w-fit h-fit shadow-custom-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.25"
                stroke="currentColor"
                className="w-10 h-10 stroke-text"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </button>
            <span className="text-text text-opacity-90 font-semibold text-sm pointer-events-none">
              Settings
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
