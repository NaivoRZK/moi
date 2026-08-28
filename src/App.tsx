import { useState } from 'react'
import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  
  return (
    <BrowserRouter>
     <nav>
       <Link to="/" >Home </Link>
    </nav>
       <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}


