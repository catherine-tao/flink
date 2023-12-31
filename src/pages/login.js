
import React, {useState} from "react";
import Flowers from "../assets/Flowers.png";
import Logo from "../assets/Logo.svg";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Editor from "./editor";

export default function Login({ show }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allowProceed, setAllowProceed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();
    // if (data.user) {
    //   localStorage.setItem("token", data.user);
    // }

    if (data.signedIn) {
      setAllowProceed(true);
    } else {
      setErrorMessage(data.message);
    }
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
            <div className="w-50 mt-5 mx-auto">
              <h1 className="h1-pink">Login</h1>
              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmailLogin">
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
                <Form.Group className="mb-1" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    placeholder="Choose a password"
                  />
                </Form.Group>
                <Link className="forgot-password" to={"/"}>
                  Forgot your password?
                </Link>
                <button className="green-button mt-5">Login</button>
              </Form>
            </div>
          </div>
        </div>
      )}
      {allowProceed && <Editor email={email}/>}
    </div>
  );
}
