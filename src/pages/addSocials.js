import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import Flowers from "../assets/Flowers.png";
import Logo from "../assets/Logo.svg";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import DescribeYourself from "./describeYourself";

export default function AddSocials({ email, colorTheme }) {
  const [proceed, setProceed] = useState(false);
  const [insta, setInsta] = useState("")
  const [youtube, setYoutube] = useState("")
  const [tiktok, setTiktok] = useState("")

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
              <h1 className="h1-pink mb-0">Add links to your socials</h1>
              <p className="page-description">
                Let your audience easily find you.
              </p>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control onChange={(e) => setInsta(e.target.value)} placeholder="Copy and paste the url here" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Youtube</Form.Label>
                  <Form.Control onChange={(e) => setYoutube(e.target.value)} placeholder="Copy and paste the url here" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tik Tok</Form.Label>
                  <Form.Control onChange={(e) => setTiktok(e.target.value)} placeholder="Copy and paste the url here" />
                </Form.Group>
                  <button onClick={() => setProceed(true)} className="green-button mt-5">Continue</button>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <DescribeYourself email={email} colorTheme={colorTheme} insta={insta} youtube={youtube} tiktok={tiktok} />
      )}
    </div>
    
  );
}
