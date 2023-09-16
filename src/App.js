import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from './pages/signup'
import React, {useState} from "react"
import Signup from './Signup';
import Login from './pages/login';
import YourProfile from './pages/yourProfile';
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <YourProfile/>
      </div>
    </BrowserRouter>
  );
}

export default App;
