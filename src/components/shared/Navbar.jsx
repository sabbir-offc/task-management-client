import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    await logOut();
    navigate("/");
  };
  const menu = (
    <>
      <li className="text-base">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="text-base">
        <NavLink to={"/about-us"}>About Us</NavLink>
      </li>
      <li className="text-base">
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn  btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              {menu}
            </ul>
          </div>
          <img src="/logo.png" alt="" className="size-10" />
        </div>
        <div className="navbar-center z-10 hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{menu}</ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt={user?.displayName} src={user?.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
              >
                <li className="text-base">{user?.displayName}</li>
                <li>
                  <button className="py-2 bg-purple-500 text-white font-semibold hover:bg-purple-600">
                    <Link to={"/dashboard/tasks"}>Dashboard</Link>
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="py-2 bg-purple-500 text-white font-semibold hover:bg-purple-600"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
