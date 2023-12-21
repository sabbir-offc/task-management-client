import { Home, LogOut, CalendarPlus, LayoutList } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
  const { user, logOut } = useAuth();

  const location = useLocation();
  const menus = [
    { path: "/", icon: <Home size={24} /> },
    {
      path: "/dashboard/add-task",
      icon: <CalendarPlus size={24} />,
    },
    {
      path: "/dashboard/tasks",
      icon: <LayoutList size={24} />,
    },
  ];
  console.log(location.pathname);

  return (
    <aside className="flex h-screen w-16 flex-col items-center overflow-y-auto border-r bg-white py-8">
      <nav className=" flex-1 ">
        <img src="/logo.png" className="size-10" />
        <div
          role="tablist"
          className="tabs tabs-boxed flex flex-col items-center space-y-6"
        >
          {menus.map((menu) => (
            <Link
              role="tab"
              key={menu.path}
              to={menu.path}
              className={`rounded-lg p-1.5 ${
                location.pathname === menu.path ? "tab-active" : ""
              }  text-gray-700 tab transition-colors duration-200 hover:bg-gray-100 focus:outline-none`}
            >
              {menu.icon}
            </Link>
          ))}
        </div>
      </nav>

      <div draggable className="flex flex-col items-center space-y-6">
        <button
          onClick={logOut}
          className="rounded-lg bg-gray-100 p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none"
        >
          <LogOut size={24} />
        </button>

        {user && (
          <img
            className="h-8 w-8 rounded-full object-cover"
            src={user?.photoURL}
            alt="User avatar"
          />
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
