import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { mount } from "marketing/MarketingApp";

import Landing from "./pages/Landing";
import Pricing from "./pages/Pricing";
import NotFound from './pages/404';

console.log(mount);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
