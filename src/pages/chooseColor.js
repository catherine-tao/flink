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
import ChooseTemplate from "./chooseTemplate";

export default function ChooseColor({ email, socialLinks }) {
    const [selectedColor, setSelectedColor] = useState(1);
    const [allowProceed, setAllowProceed] = useState(false);

    return (
        <div>
            {!allowProceed && <div className="background-green vh-100">
            <h2 className="green-left-panel-text">Flink helps generate personal landing pages to make your content appealing.</h2>
            <img className="flower-image-panel" src={Flowers}/>
            <div className="white-right-panel">
                <img className="white-panel-logo" src={Logo}/>
                <div className="w-50 mt-5 mx-auto">
                <h1 className="h1-pink mb-0">Choose your branding colour</h1>
                <div className="color-button">
                    <Form.Control
                        type="color"
                        id="exampleColorInput"
                        defaultValue="#563d7c"
                        title="Choose your color"
                    />
         
                </div>
                <div align-items="center">
                    <button className="green-button mt-5" onClick={() => setAllowProceed(true)}>
                    Continue
                    </button>
                </div>
                
                </div>
            </div>
            </div>}
            {allowProceed && <ChooseTemplate email={email} socialLinks={socialLinks}  />}

        </div>
    
    );
}
