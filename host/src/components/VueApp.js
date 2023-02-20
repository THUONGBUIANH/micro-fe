import React, { useCallback } from "react";
import { mount } from "vueApp/VueApp";

function VueApp() {
  const mountVue = useCallback((el) => {
    mount(el);
  }, []);

  return <div ref={mountVue} />;
}

export default VueApp;
