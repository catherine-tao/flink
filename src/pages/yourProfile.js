import ReactDOM from "react-dom/client";
import React, {useState} from "react";
import Flowers from "../assets/Flowers.png"
import Logo from "../assets/Logo.svg"
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";


export default function YourProfile({ show }) {
  return (
    <div className="background-green vh-100">
      <h2 className="green-left-panel-text">Flink helps generate personal landing pages to make your content appealing.</h2>
      <img className="flower-image-panel" src={Flowers}/>
      <div className="white-right-panel">
        <img className="white-panel-logo" src={Logo}/>
        <div className="w-50 mt-5 mx-auto">
          <h1 className="h1-pink mb-0">Your Profile Picture</h1>
          <p className="page-description">This picture will be displayed at the fore front of your landing page.</p>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Link to="/category">
                <button className="green-button mt-5">
                Continue
                </button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}
