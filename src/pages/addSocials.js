import ReactDOM from "react-dom/client";
import React, {useState} from "react";
import Flowers from "../assets/Flowers.png"
import Logo from "../assets/Logo.svg"
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import ChooseCategory from "./chooseCategory";


export default function AddSocials({ email }) {
  const [allowProceed, setAllowProceed] = useState(false);
  const [instagramLink, setInstagramLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [tiktokLink, setTiktokLink] = useState("");

  return (
    <div>
      {!allowProceed && (
        <div className="background-green vh-100">
        <h2 className="green-left-panel-text">Flink helps generate personal landing pages to make your content appealing.</h2>
        <img className="flower-image-panel" src={Flowers}/>
        <div className="white-right-panel">
          <img className="white-panel-logo" src={Logo}/>
          <div className="w-50 mt-5 mx-auto">
            <h1 className="h1-pink mb-0">Add links to your socials</h1>
            <p className="page-description">Let your audience easily find you.</p>
            <Form>
              <Form.Group className="mb-3">
                  <Form.Label>Instagram</Form.Label>
                  <Form.Control placeholder="Copy and paste the url here"
                  value={instagramLink}
                  onChange={(e) => {
                    setInstagramLink(e.target.value);
                    console.log("instagramLink", instagramLink);
                  }}/>
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Youtube</Form.Label>
                  <Form.Control placeholder="Copy and paste the url here"
                  value={facebookLink}
                  onChange={(e) => {
                    setFacebookLink(e.target.value);
                    console.log("facebookLink", facebookLink);
                  }} />
              </Form.Group>
              <Form.Group className="mb-3">
                  <Form.Label>Tik Tok</Form.Label>
                  <Form.Control placeholder="Copy and paste the url here" 
                  value={tiktokLink}
                  onChange={(e) => {
                    setTiktokLink(e.target.value);
                    console.log("tiktokLink", tiktokLink);
                  }}/>
              </Form.Group>
              <button className="green-button mt-5" onClick={() => setAllowProceed(true)}>
                Continue
              </button>
            </Form>
          </div>
        </div>
      </div>
      )}
      {allowProceed && <ChooseCategory email={email} socialLinks={[instagramLink,facebookLink,tiktokLink]}/>}
    </div>
    
  );
}
