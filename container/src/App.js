import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";

const Dashboard = lazy(() => import("./components/Dashboard"));
const Marketing = lazy(() => import("./components/Martketing"));
const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/marketing/*", element: <Marketing /> },
      { path: "/dashboard", element: <Dashboard /> },
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
