import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About';
import Header from './Components/Header';
import Footer from './Components/Footer'


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />} ></Route>
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
