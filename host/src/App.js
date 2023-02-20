import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";

const VueApp = lazy(() => import("./components/VueApp"));
const ReactApp = lazy(() => import("./components/ReactApp"));
const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/react/*", element: <ReactApp /> },
      { path: "/vue", element: <VueApp /> },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
