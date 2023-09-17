import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import Flowers from "../assets/Flowers.png";
import Logo from "../assets/Logo.svg";
import Form from "react-bootstrap/Form";
import LoadingBackground from "./loadingBackground";
import { Link } from "react-router-dom";
import AddSocials from "./addSocials";
const OpenAI = require("openai");

export default function DescribeYourself({ email, colorTheme, insta, youtube, tiktok }) {
  console.log("describe email", email);

  const [isLoading, setIsLoading] = useState(false);
  const [isFilled, setIsFIlled] = useState(false);

  const [allowProceed, setAllowProceed] = useState(false);
  const [backgroundUrl, setBackgroundUrl] = useState("");

  const [word1, setword1] = useState("");
  const [word2, setword2] = useState("");
  const [word3, setword3] = useState("");

  const handleClick = () => {
    generate();
    setAllowProceed(true);
  };

  const generate = async (e) => {
    console.log("reached");

    const openai = new OpenAI({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true
    });

    const prompt = `generate a background image for ${word1}, ${word2}, ${word3}`;

    const result = await openai.images.generate
    ({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
    })

    const backgroundUrl = result.data[0].url

    setBackgroundUrl(backgroundUrl);
    console.log(result.data[0].url);
    
    const res = await fetch(`http://localhost:3000/background/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        backgroundUrl
      }),
    });

    const data = await res.json();
    console.log("back data", data);
  };

  return (
    <div>
      {!allowProceed && (
        <div className="background-green vh-100">
          <h2 className="green-left-panel-text">
            Flink helps generate personal landing pages to make your content
            appealing.
          </h2>
          <img className="flower-image-panel" src={Flowers} />
          <div className="white-right-panel">
            <img className="white-panel-logo" src={Logo} />
            {isLoading ? (
              <div style={{ marginTop: "20%" }} className="w-75 mx-auto">
                <h1 className="h1-pink mb-0">
                  Generating your personal landing page...
                </h1>
              </div>
            ) : (
              <div className="w-50 mt-5 mx-auto">
                <h1 className="h1-pink mb-0">
                  What are three words that describe what you do?
                </h1>
                <p className="page-description mt-4 mb-0">
                  We will use this to generate a unique look for your landing
                  page.
                </p>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label></Form.Label>
                    <Form.Control
                      placeholder="Your first word"
                      value={word1}
                      onChange={(e) => {
                        setword1(e.target.value);
                        console.log("word1", word1);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      placeholder="Your second word"
                      value={word2}
                      onChange={(e) => {
                        setword2(e.target.value);
                        console.log("word2", word2);
                      }}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      placeholder="Your third word"
                      value={word3}
                      onChange={(e) => {
                        setword3(e.target.value);
                        console.log("word3", word3);
                      }}
                    />
                  </Form.Group>
                  <button className="green-button mt-5" onClick={handleClick}>
                    Continue
                  </button>
                </Form>
              </div>
            )}
          </div>
        </div>
      )}
      {allowProceed && (
        <LoadingBackground email={email} colorTheme={colorTheme} insta={insta} youtube={youtube} tiktok={tiktok}  backgroundUrl={backgroundUrl} />
      )}
    </div>
  );
}
