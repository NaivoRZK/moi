import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/disposition/NavBar';
import Home from './pages/Home';
import Projets from './pages/Projets';
import Experiences from './pages/Experiences';
import Contacts from './pages/Contacts';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
