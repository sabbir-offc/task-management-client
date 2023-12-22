import {
  Home,
  CalendarPlus,
  LayoutList,
  Bell,
  UserRoundCog,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import useNotifications from "../../hooks/useNotifications";

const Sidebar = () => {
  const { notifications } = useNotifications();

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
      path: "/dashboard/profile",
      icon: <UserRoundCog size={24} />,
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
      <Link
        to={"/dashboard/notifications"}
        className={`p-1.5 ${
          location.pathname === "/dashboard/notifications" ? "active" : ""
        }  text-gray-700 tab relative transition-colors duration-200 hover:bg-gray-100 focus:outline-none`}
      >
        <Bell size={24} />
        <span className="absolute left-1/2 bottom-4 rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
          {notifications?.length}
        </span>
      </Link>
    </div>
  );
};

export default Sidebar;
