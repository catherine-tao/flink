import React, { useState } from "react";
import Flowers from "../assets/Flowers.png";
import Logo from "../assets/Logo.svg";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import ChooseCategory from "./chooseCategory";

export default function Signup({ show }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [successfulSignup, setSuccessfulSignup] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
        name
      }),
    });
    

    const resJson = await res.json();
    if(resJson.userCreated){
      setSuccessfulSignup(true)
    }
  };

  return (
    <div>
      {!successfulSignup? 
      <div className="background-green vh-100">
      <h2 className="green-left-panel-text">
        Flink helps generate personal landing pages to make your content
        appealing.
      </h2>
      <img className="flower-image-panel" src={Flowers} />
      <div className="white-right-panel">
        <img className="white-panel-logo" src={Logo} />
        <div className="w-50 mt-5 mx-auto">
          <h1 className="h1-pink">Join Flink</h1>
          <Form onSubmit={handleSignup}>
            <Form.Group className="mb-3" controlId="formBasicEmailSignup">
              <Form.Label>Email</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="flink/your-username.com"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Choose a password"
                type="password"
              />
            </Form.Group>
            <button className="green-button">Submit</button>
          </Form>
          {
            successfulSignup &&
            <h3>You've created an account!</h3>
          }
          <p className="already-account">
            Already have an account? <Link to={"/login"}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>: <ChooseCategory email={email}/>}
    </div>
    
  );
}
