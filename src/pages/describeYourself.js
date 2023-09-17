import ReactDOM from "react-dom/client";
import React, {useState} from "react";
import Flowers from "../assets/Flowers.png"
import Logo from "../assets/Logo.svg"
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";


export default function DescribeYourself({ show }) {
    const [isLoading, setIsLoading] = useState(false)
    return (
    <div className="background-green vh-100">
      <h2 className="green-left-panel-text">Flink helps generate personal landing pages to make your content appealing.</h2>
      <img className="flower-image-panel" src={Flowers}/>
      <div className="white-right-panel">
        <img className="white-panel-logo" src={Logo}/>
        {isLoading ?
            <div style={{marginTop: "20%"}} className="w-75 mx-auto">
                <h1 className="h1-pink mb-0">Generating your personal landing page...</h1>
            </div> :
        <div className="w-50 mt-5 mx-auto">
          <h1 className="h1-pink mb-0">What are three words that describe what you do?</h1>
          <p className="page-description mt-4 mb-0">We will use this to generate a unique look for your landing page.</p>
          <Form>
            <Form.Group className="mb-3">
                <Form.Label>1</Form.Label>
                <Form.Control placeholder="Your first word"/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>2</Form.Label>
                <Form.Control placeholder="Your second word" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>3</Form.Label>
                <Form.Control placeholder="Your third word" />
            </Form.Group>
            <button className="green-button mt-5" onClick={() => {setIsLoading(true)}}>
              Generate
            </button>
          </Form>
        </div> 
        }
      </div>
    </div>
  );
}