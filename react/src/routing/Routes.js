import Root from "../Root";
import React, { lazy } from "react";

const Landing = lazy(() => import("../pages/Landing"));
const Pricing = lazy(() => import("../pages/Pricing"));

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "pricing", element: <Pricing /> },
    ],
  },
];
