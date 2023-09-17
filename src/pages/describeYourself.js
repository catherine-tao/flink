import ReactDOM from "react-dom/client";
import React, {useState} from "react";
import Flowers from "../assets/Flowers.png"
import Logo from "../assets/Logo.svg"
import Form from 'react-bootstrap/Form';
import LoadingBackground from "./loadingBackground";
import { Link } from "react-router-dom";




export default function DescribeYourself({ email}) {
    const [isLoading, setIsLoading] = useState(false);
    const [isFilled, setIsFIlled] = useState(false);
    
    const [allowProceed, setAllowProceed] = useState(false);
    const [backgroundUrl, setBackgroundUrl] = useState("");

    const [word1, setword1] = useState("");
    const [word2, setword2] = useState("");
    const [word3, setword3] = useState("");
 

    const generate = async(e) => {
        e.preventDefault();

        console.log("reacched");
        
        const OpenAI = require("openai");
        const openai = new OpenAI({
            apiKey: process.env.API_KEY,
            dangerouslyAllowBrowser: true
        });

        const prompt = `generate a background image for ${word1}, ${word2}, ${word3}`;

        const result = await openai.images.generate
        ({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        })

        setBackgroundUrl(result.data[0].url);
        console.log(backgroundUrl); 
        console.log(result.data[0].url); 
    
        // const res = await fetch(`http://localhost:3000/updateData/${{email}}`, {
        //     method: "POST",
        //     headers: {
        //     "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         backgroundUrl,
        //     }),
        // } );
       }

    return (
      <div>
        {!allowProceed && (
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
                <Form.Control placeholder="Your first word"
                value={word1}
                onChange={(e) => {
                  setword1(e.target.value);
                  console.log("word1", word1);
                }}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>2</Form.Label>
                <Form.Control placeholder="Your second word"
                 value={word2}
                 onChange={(e) => {
                   setword2(e.target.value);
                   console.log("word2", word2);
                 }} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>3</Form.Label>
                <Form.Control placeholder="Your third word" 
                 value={word3}
                 onChange={(e) => {
                   setword3(e.target.value);
                   console.log("word3", word3);
                 }}/>
            </Form.Group>
            <button className="green-button mt-5" onClick={generate}>
              Continue
            </button>
          </Form>
        </div> 
        }
      </div>
    </div>) }
    {allowProceed && <LoadingBackground email={email} backgroundUrl={backgroundUrl} />}
      </div>
  );
}
