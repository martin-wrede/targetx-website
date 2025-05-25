import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import UxuiDesign from './components/UxuiDesign';
import Referenzen from './components/Referenzen';
import HistMuseumBremerhaven from './components/HistMuseumBremerhaven';
import Kammerkonzerte from './components/Kammerkonzerte';
import Passus from './components/Passus';
import Kooperationen from './components/Kooperationen';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
      <div className="App" id="wrapper">
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ux-ui-design" element={<UxuiDesign />} />
          <Route path="/referenzen" element={<Referenzen />} />
          <Route path="/hist-museum-bremerhaven" element={<HistMuseumBremerhaven />} />
          <Route path="/kammerkonzerte" element={<Kammerkonzerte />} />
          <Route path="/passus" element={<Passus />} />
          <Route path="/kooperationen" element={<Kooperationen />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    
  );
}

export default App;
