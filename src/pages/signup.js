import ReactDOM from "react-dom/client";
import React from "react";
import Flowers from "../assets/Flowers.png"
import Logo from "../assets/Logo.svg"
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export default function SignUp({ show }) {
  return (
    <div className="background-green vh-100">
      <h2 className="green-left-panel-text">Flink helps generate personal landing pages to make your content appealing.</h2>
      <img className="flower-image-panel" src={Flowers}/>
      <div className="white-right-panel">
        <img className="white-panel-logo" src={Logo}/>
        <div className="w-50 mt-5 mx-auto">
          <h1 className="h1-pink">Join Flink</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="email" placeholder="flink/your-username.com" />
            </Form.Group>
            <button className="green-button">
              Submit
            </button>
          </Form>
            <p className="already-account">Already have an account? <Link to={"/"}>Sign in</Link></p>
        </div>
      </div>
    </div>
  );
}