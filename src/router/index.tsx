import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/home";
import { PATH } from "./path";

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <HomePage />,
  },
]);
