import React, { useCallback } from "react";
import { mount } from "reactApp/ReactApp";
import { useLocation } from "react-router-dom";

function ReactApp() {
  const location = useLocation();

  const mountReactApp = useCallback((el) => {
    mount(el, { initialPathname: location.pathname });
  }, []);

  return <div ref={mountReactApp} />;
}

export default ReactApp;
