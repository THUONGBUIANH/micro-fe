import React, { useCallback } from "react";
import { mount } from "marketing/MarketingApp";
import { useLocation, useNavigate } from "react-router-dom";

function Martketing() {
  const location = useLocation();

  const mountMartketing = useCallback((el) => {
    mount(el, { initialPathname: location.pathname.replace("marketing", "") });
  }, []);

  return <div ref={mountMartketing} />;
}

export default Martketing;
