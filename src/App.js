import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Signup from "./pages/signup";
import React, { useState } from "react";
import Prompt from "./pages/Prompt";
import Login from "./pages/login";
import YourProfile from "./pages/yourProfile";
import AddSocials from "./pages/addSocials";
import ChooseCategory from "./pages/chooseCategory";
import { BrowserRouter } from "react-router-dom";
import DescribeYourself from "./pages/describeYourself";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ChooseCategory />
        <AddSocials />
        <Signup />
        <Login />
        <DescribeYourself/>
      </div>
    </BrowserRouter>
  );
}

export default App;
