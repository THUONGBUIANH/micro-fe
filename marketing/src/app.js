import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Landing = lazy(() => import("./pages/Landing"));
const Pricing = lazy(() => import("./pages/Pricing"));
const NotFound = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route exact path="pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
