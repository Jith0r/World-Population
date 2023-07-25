import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About"; // Auto-import
import Home from "./pages/Home"; // Auto-import
import Error from "./pages/Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
