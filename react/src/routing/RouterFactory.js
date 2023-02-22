import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from "./Routes";

export function createRouter({ strategy, initialPathname, onNavigate }) {
  const newRoutes = routes(onNavigate);

  if (strategy === "browser") {
    return createBrowserRouter(newRoutes, { basename: "/react" });
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(newRoutes, {
    initialEntries: initialEntries,
    basename: "/react",
  });
}
