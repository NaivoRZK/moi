import { useState } from 'react'
import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Projets from './pages/Projets';
import  Experiences from './pages/Experiences';
import Services from './pages/Services'
import Parocurs from './pages/Parcours';
import Contacts from './pages/Contacts';


export default function App() {
  
  return (
    <BrowserRouter>
     <nav>
       <Link to="/" >Home </Link>
       <Link to="/projets" >Projets </Link>
       <Link to="/experiences" >Experiences </Link>
       <Link to="/contacts" >Contacts </Link>
    </nav>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projets" element={<Projets/>}/>
          <Route path="/experiences" element={<Experiences/>}/>
           <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </BrowserRouter>
  );
}


