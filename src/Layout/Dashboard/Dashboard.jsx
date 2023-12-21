import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-11">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
