import ReactDOM from "react-dom/client";
import React from "react";
import Flowers from "../assets/Flowers.png"
import Logo from "../assets/Logo.svg"
import Template1 from "../assets/Template1.png"
import Template2 from "../assets/Template2.png"
import Template3 from "../assets/Template3.png"
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import {useState} from 'react';
import ChooseColor from "./chooseColor";
import LoadingBackground from "./loadingBackground";
import DescribeYourself from "./describeYourself";


export default function ChooseTemplate({ email }) {
    const [selectedTemplate, setSelectedTemplate] = useState(1);
    const [allowProceed, setAllowProceed] = useState(false);

    return (
        <div>
            {!allowProceed && <div className="background-green vh-100">
            <h2 className="green-left-panel-text">Flink helps generate personal landing pages to make your content appealing.</h2>
            <img className="flower-image-panel" src={Flowers}/>
            <div className="white-right-panel">
                <img className="white-panel-logo" src={Logo}/>
                <div className="w-50 mt-5 mx-auto">
                <h1 className="h1-pink mb-0">Choose a template</h1>
                <div className="template-div">
                    {/* {categories.map((category) => 
                        <button onClick={() => {setSelectedTemplate(category)}} 
                        className={category == selectedCategory ? "category-button-selected category-button" : "category-button"}>
                        {category}
                        </button>
                    )} */}
                    <button onClick={() => {setSelectedTemplate(1)}} className={1 == selectedTemplate? "selected-template-button": "template-button"}><img src={Template1} alt="Template 1" 
                        /> </button>
                    <button onClick={() => {setSelectedTemplate(2)}} className={2 == selectedTemplate? "selected-template-button": "template-button"}><img src={Template2} alt="Template 2" 
                        /> </button>
                    <button onClick={() => {setSelectedTemplate(3)}} className={3 == selectedTemplate? "selected-template-button": "template-button"}><img src={Template3} alt="Template 3"
                       /> </button>
                </div>
                <div align-items="center">
                    <Link to="/socials">
                        <button className="green-button mt-5">
                        Continue
                        </button>
                    </Link>
                </div>
                
                </div>
            </div>
            </div>}
            {allowProceed && <DescribeYourself email={email}  />}

        </div>
    
    );
}
