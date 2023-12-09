import React from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import Main from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Main />} />
      <Route path="/coming-soon" exact element={<Main />} />
    </Routes>
  );
}

export default App;
