import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

import { StylesProvider } from "@mui/styles";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <Landing />,
  },
  {
    path: "/pricing",
    element: <Landing />,
  },
]);

const App = () => {
  return (
    <StylesProvider>
      <RouterProvider router={router} />
    </StylesProvider>
  );
};

export default App;
