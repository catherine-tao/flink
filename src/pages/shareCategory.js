import React from "react";
import Flowers from "../assets/Flowers.png"
import Logo from "../assets/Logo.svg"
import CategoryButton from "../components/categoryButton";

export default function ShareCategory({ show }) {
  return (
    <div className="background-green vh-100">
      <div className="background-green vh-100">
      <h2 className="green-left-panel-text">Flink helps generate personal landing pages to make your content appealing.</h2>
      <img className="flower-image-panel" src={Flowers}/>
      <div className="white-right-panel">
        <img className="white-panel-logo" src={Logo}/>
        <h1>Share a bit about yourself</h1>
        <div className="category-buttons-layout">
            <CategoryButton name="Creator"/>
            <CategoryButton name="Influencer"/>
            <CategoryButton name="Artist"/>
            <CategoryButton name="Educator"/>
        </div>
      </div>
    </div>
    </div>
  );
}

