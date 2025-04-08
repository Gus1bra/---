import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Devices from "../pages/Devices/Devices";
import Scenarios from "../pages/Scenarios/Scenarios";
import Settings from "../pages/Settings/Settings";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/devices", element: <Devices /> },
  { path: "/scenarios", element: <Scenarios /> },
  { path: "/settings", element: <Settings /> },
]);

export const AppRouter = () => <RouterProvider router={router} />;