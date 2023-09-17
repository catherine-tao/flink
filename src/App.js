import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import React, {useState} from "react"

import Login from './pages/login';
import Signup from './pages/signup'
import HomePage from "./pages/homepage"
import ChooseCategory from "./pages/chooseCategory"
import DescribeYourself from './pages/describeYourself';
import YourProfile from './pages/yourProfile';
import Socials from "./pages/addSocials"
import Editor from './pages/editor';
import LoadingBackground from './pages/loadingBackground';
import ChooseTemplate from './pages/chooseTemplate';
import ChooseColor from './pages/chooseColor';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/profile" element={<YourProfile/>} />
          <Route exact path="/category" element={<ChooseCategory/>} />
          <Route exact path="/describe-yourself" element={<DescribeYourself/>} />
          <Route exact path="/socials" element={<Socials/>} />
          <Route exact path="/editor" element={<Editor/>} />
          <Route exact path="/loading" element={<LoadingBackground/>} />
          <Route exact path="/choose-template" element={<ChooseTemplate/>}/>
          <Route exact path="/choose-color" element={<ChooseColor/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
