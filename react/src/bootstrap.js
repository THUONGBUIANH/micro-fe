import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { createRouter } from "./routing/RouterFactory";

// Mount function to start the app
const mount = (el, { strategy, initialPathname, onNavigate }) => {
  const router = createRouter({ strategy, initialPathname, onNavigate });

  const root = createRoot(el);

  root.render(<App router={router} />);
};

//If we are run development, run isolation

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing_dev_root");

  if (devRoot) {
    mount(devRoot, { strategy: "browser" });
  }
}

// we are runing through container

export { mount };
