// import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/login";
// import Main from "./components/dashboard/main/main";
// import About from "./pages/about";
import Calculator from "./calculator/cal";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Calculator />} />
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/main" element={<Main />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
