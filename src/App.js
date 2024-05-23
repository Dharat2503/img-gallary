import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Home2 from "./pages/Home2";

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home2" element={<Home2/>} />
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
