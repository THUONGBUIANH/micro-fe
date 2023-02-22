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
        // console.log("onNavigate", location);
        // if(location.pathname !== newPathname) {
        //   navigate(newPathname)
        // }
        console.log("newLoc", newLoc);
        
      },
    });
  }, []);

  return <div ref={mountReactApp} />;
}

export default ReactApp;
