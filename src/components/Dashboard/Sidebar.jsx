import { Home, LogOut, CalendarPlus, LayoutList, Bell } from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation } from "react-router-dom";

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
    {
      path: "/dashboard/notifications",
      icon: <Bell size={24} />,
    },
  ];

  return (
    <div className="btm-nav">
      {menus.map((menu) => (
        <Link
          key={menu.path}
          to={menu.path}
          className={`p-1.5 ${
            location.pathname === menu.path ? "active" : ""
          }  text-gray-700 tab transition-colors duration-200 hover:bg-gray-100 focus:outline-none`}
        >
          {menu.icon}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
