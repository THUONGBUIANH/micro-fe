import React, { useCallback } from "react";
import { mount } from "reactApp/ReactApp";
import { useLocation, useNavigate } from "react-router-dom";

function ReactApp() {
  const location = useLocation();
  const navigate = useNavigate();

  const mountReactApp = useCallback((el) => {
    console.log("location.pathname", location.pathname);
    mount(el, {
      initialPathname: location.pathname,
      onNavigate: (newLoc) => {
        if (location.pathname !== newLoc?.pathname) {
          navigate(`/react${newLoc?.pathname}`);
        }
      },
    });
  }, []);

  return <div ref={mountReactApp} />;
}

export default ReactApp;
