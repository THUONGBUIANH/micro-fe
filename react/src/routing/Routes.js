import Root from "../Root";
import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Landing = lazy(() => import("../pages/Landing"));
const Pricing = lazy(() => import("../pages/Pricing"));

export const routes = (onNavigate) => {
  return [
    {
      path: "/",
      element: <Root onNavigate={onNavigate} />,
      children: [
        { path: "/landing", element: <Landing /> },
        { path: "/pricing", element: <Pricing /> },
        {
          path: "/",
          element: <Navigate to="/landing" />,
        },
      ],
    },
  ];
};
