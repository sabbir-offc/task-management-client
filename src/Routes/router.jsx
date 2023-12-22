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
import Notifications from "../pages/Dashboard/Notifications";
import Profile from "../pages/Dashboard/Profile";
import { Error } from "../pages/Error/Error";
import AboutUsPage from "../pages/About Us/AboutUs";
import Contact from "../pages/Contact/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
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
      {
        path: "about-us",
        element: <AboutUsPage />,
      },
      {
        path: "contact",
        element: <Contact />,
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
    errorElement: <Error />,
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
        path: "profile",
        element: <Profile />,
      },
      {
        path: "update/:id",
        element: <UpdateTask />,
        loader: ({ params }) => getSingleTask(params.id),
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
]);

export default router;
