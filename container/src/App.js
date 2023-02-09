import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Pricing from "./pages/Pricing";
// import NotFound from './pages/404';

import Martketing from "./components/Martketing";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Landing />} />
    //     <Route exact path="pricing" element={<Pricing />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>
    <>
      <h1>Hi Container</h1>
      <hr />
      <Martketing />
    </>
  );
};

export default App;
