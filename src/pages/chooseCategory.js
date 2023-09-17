import ReactDOM from "react-dom/client";
import React from "react";
import Flowers from "../assets/Flowers.png"
import Logo from "../assets/Logo.svg"
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import {useState} from 'react';

const categories = ['Creator', 'Influencer', 'Artist', 'Educator', 'Entertainer', 'Model', 'Non-Profit', 'Personal', 'Athlete', 'Musician', 'Other']

export default function ChooseCategory({ email, socialLinks }) {
    const [selectedCategory, setSelectedCategory] = useState("")

    return (
    <div className="background-green vh-100">
      <h2 className="green-left-panel-text">Flink helps generate personal landing pages to make your content appealing.</h2>
      <img className="flower-image-panel" src={Flowers}/>
      <div className="white-right-panel">
        <img className="white-panel-logo" src={Logo}/>
        <div className="w-50 mt-5 mx-auto">
          <h1 className="h1-pink mb-0">Share a bit about yourself</h1>
          <p className="page-description mt-4">Which category matches you most?</p>
          <div>
            {categories.map((category) => 
                <button onClick={() => {setSelectedCategory(category)}} 
                className={category == selectedCategory ? "category-button-selected category-button" : "category-button"}>
                {category}
                </button>
            )}
          </div>
          <Link to="/socials">
            <button className="green-button mt-5">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
