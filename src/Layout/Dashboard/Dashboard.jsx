import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Dashboard = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-11">
          <Outlet />
        </div>
      </div>
    </DndProvider>
  );
};

export default Dashboard;
