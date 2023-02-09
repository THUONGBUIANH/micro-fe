import React, { useCallback } from "react";
import { mount } from "marketing/MarketingApp";

function Martketing() {
  const mountMartketing = useCallback((el) => {
    mount(el);
  }, []);

  return <div ref={mountMartketing} />;
}

export default Martketing;
