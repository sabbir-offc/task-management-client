import {
  Home,
  BarChart,
  Copy,
  Bookmark,
  Users,
  LogOut,
  CalendarPlus,
  LayoutList,
} from "lucide-react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  return (
    <aside className="flex h-screen w-16 flex-col items-center overflow-y-auto border-r bg-white py-8">
      <nav className="flex flex-1 flex-col items-center space-y-6">
        <img src="/logo.png" className="size-10" />

        <Link
          to={"/"}
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <Home size={24} />
        </Link>

        <Link className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none">
          <CalendarPlus size={24} />
        </Link>

        <Link className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none">
          <LayoutList size={24} />
        </Link>

        <a className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none">
          <Bookmark size={24} />
        </a>

        <a className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none">
          <Users size={24} />
        </a>
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
