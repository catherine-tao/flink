import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import React, {useState} from "react"

import Login from './pages/login';
import Signup from './pages/signup'
import HomePage from "./pages/homepage"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
