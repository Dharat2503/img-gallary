import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home2" element={<Home2/>} />
      <Route path="/home3" element={<Home3/>} />
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
