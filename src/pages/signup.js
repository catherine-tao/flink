import React from "react";
import Flowers from "../assets/Flowers.png"
import Logo from "../assets/Logo.svg"

export default function SignUp({ show }) {
  return (
    <div className="background-green vh-100">
      <h2 className="green-left-panel-text">Flink helps generate personal landing pages to make your content appealing.</h2>
      <img className="flower-image-panel" src={Flowers}/>
      <div className="white-right-panel">
        <img className="white-panel-logo" src={Logo}/>
      </div>
    </div>
  );
}