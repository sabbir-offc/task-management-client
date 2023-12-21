import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Dashboard = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Outlet />
        <Sidebar />
      </div>
    </DndProvider>
  );
};

export default Dashboard;
