import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SignUp from './pages/signup'
import React, {useState} from "react"
import Signup from './Signup';
import Login from './Login';

function App() {

  return (
    <div className="App">
      <Signup />
      <Login />
    </div>
  );
}

export default App;
