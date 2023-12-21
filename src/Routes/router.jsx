import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import { Register } from "../pages/Auth/Register";
import { Login } from "../pages/Auth/Login";
import Dashboard from "../Layout/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoutes";
import AddTask from "../pages/Dashboard/AddTask";
import Todo from "../pages/Dashboard/Todo";
import UpdateTask from "../pages/Dashboard/UpdateTask";
import { getSingleTask } from "../api/user";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "add-task",
        element: <AddTask />,
      },
      {
        path: "tasks",
        element: <Todo />,
      },
      {
        path: "update/:id",
        element: <UpdateTask />,
        loader: ({ params }) => getSingleTask(params.id),
      },
    ],
  },
]);

export default router;
