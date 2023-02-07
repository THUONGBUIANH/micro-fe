import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

// Mount function to start the app
const mount = (el) => {
  debugger
  const root = createRoot(el);

  root.render(<App />);
};

//If we are run development, run isolation

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing_dev_root");
  
  if (devRoot) {
    mount(devRoot);
  }
}

// we are runing through container

export { mount };
