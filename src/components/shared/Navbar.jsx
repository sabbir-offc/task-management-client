import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useAuth();

  return (
    <div>
      <div>
        <nav className="bg-white  ">
          <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16">
              <div className=" flex items-center">
                <a className="flex-shrink-0" href="/">
                  <img className="w-8 h-8" src="/logo.png" alt="Workflow" />
                </a>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    <a
                      className="text-gray-800  hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium"
                      href="/"
                    >
                      Home
                    </a>
                  </div>
                </div>
              </div>
              <div className="block">
                <div className="flex items-center ml-4 md:ml-6">
                  <div className="relative ml-3">
                    <div className="relative inline-block text-left">
                      {user && (
                        <div>
                          <img
                            src={user?.photoURL}
                            onClick={() => setOpen(!open)}
                            className="rounded-full size-12 cursor-pointer"
                            id="options-menu"
                          />
                        </div>
                      )}
                      {open ||
                        (user && (
                          <div
                            className={` ${
                              open &&
                              "transition-transform ease-in-out duration-500"
                            } z-10 absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg text-black ring-opacity-5`}
                          >
                            <div
                              className="py-1 "
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="options-menu"
                            >
                              <Link
                                to={"/dashboard/tasks"}
                                className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900  dark:hover:text-white dark:hover:bg-gray-600"
                                role="menuitem"
                              >
                                <span className="flex flex-col">
                                  <span>Dashboard</span>
                                </span>
                              </Link>

                              <button
                                onClick={logOut}
                                className=" block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900  dark:hover:text-white dark:hover:bg-gray-600 w-full text-left"
                                role="menuitem"
                              >
                                <span className="flex flex-col">
                                  <span>Logout</span>
                                </span>
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                className="text-gray-800 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium"
                href="/#"
              >
                Home
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
