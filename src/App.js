import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Signup from './pages/signup'
import React, {useState} from "react"
import Prompt from './Prompt';
import Login from './pages/login';
import YourProfile from './pages/yourProfile';
import AddSocials from './pages/addSocials';
import ChooseCategory from './pages/chooseCategory'
import DescribeYourself from './pages/describeYourself';
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <DescribeYourself/>
      </div>
    </BrowserRouter>
  );
}

export default App;
