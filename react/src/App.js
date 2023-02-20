import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

const App = ({ router }) => {
  return (
    <Suspense fallback="Loading...">
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
