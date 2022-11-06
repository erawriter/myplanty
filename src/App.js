import React from 'react';
import './App.css';
import Home from './Home';
import Localshops from './Localshops';
import Plantcare from './Plantcare';
import About from './About';
import NavbarComp from './NavComp';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarComp />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/plantcare" element={<Plantcare />} />
          <Route path="/localshops" element={<Localshops />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;