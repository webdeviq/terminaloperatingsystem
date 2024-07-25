import { createBrowserRouter } from "react-router-dom";
import Login from "../features/login/Login";
import App from "../layout/App";
import Unit from "../features/Unit/Unit.tsx";
import Homepage from "../features/homepage/Homepage.tsx";
import Vessel from "../features/Vessel/Vessel.tsx";
// testing this change.
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Login /> },
      { path: "homepage", element: <Homepage /> },
      {path: "vessels", element: <Vessel/>},
      { path: "unitsview", element: <Unit /> },
      { path: "employees", element: <Homepage /> },
      { path: "machinery", element: <Homepage /> },
      { path: "finance", element: <Homepage /> },
    ],
  },
]);
