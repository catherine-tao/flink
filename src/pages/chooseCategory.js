import ReactDOM from "react-dom/client";
import React, {useState} from "react";
import Flowers from "../assets/Flowers.png";
import Logo from "../assets/Logo.svg";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import AddSocials from "./addSocials";
import ChooseColor from "./chooseColor";
import ChooseTemplate from "./chooseTemplate";

const categories = [
  "Creator",
  "Influencer",
  "Artist",
  "Educator",
  "Entertainer",
  "Model",
  "Non-Profit",
  "Personal",
  "Athlete",
  "Musician",
  "Other",
];

export default function ChooseCategory({ email }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [proceed, setProceed] = useState(false);
  console.log("category email", email)


  return (
    <div>
      {!proceed ? (
        <div className="background-green vh-100">
          <h2 className="green-left-panel-text">
            Flink helps generate personal landing pages to make your content
            appealing.
          </h2>
          <img className="flower-image-panel" src={Flowers} />
          <div className="white-right-panel">
            <img className="white-panel-logo" src={Logo} />
            <div className="w-50 mt-5 mx-auto">
              <h1 className="h1-pink mb-0">Share a bit about yourself</h1>
              <p className="page-description mt-4">
                Which category matches you most?
              </p>
              <div>
                {categories.map((category) => (
                  <button
                    onClick={() => {
                      setSelectedCategory(category);
                    }}
                    className={
                      category == selectedCategory
                        ? "category-button-selected category-button"
                        : "category-button"
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button className="green-button mt-5" onClick={() => setProceed(true)}>Continue</button>
            </div>
          </div>
        </div>
      ) : (
        <ChooseTemplate email={email}/>
      )}
    </div>
  );
}
