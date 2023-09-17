import ReactDOM from "react-dom/client";
import React, {useState} from "react";
import Flowers from "../assets/Flowers.png";
import Logo from "../assets/Logo.svg";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function Entrance({ entranceType }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [allowProceed, setAllowProceed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [type, setType] = useState(entranceType)

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

    console.log("data", data); // delete later

    if (data.signedIn) {
      setAllowProceed(true);
    } else {
      setErrorMessage(data.message);
    }
  };

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
      }),
    });
  };

  return (
    <div className="background-green vh-100">
      <h2 className="green-left-panel-text">
        Flink helps generate personal landing pages to make your content
        appealing.
      </h2>
      <img className="flower-image-panel" src={Flowers} />
      <div className="white-right-panel">
        <img className="white-panel-logo" src={Logo} />
        <div className="w-50 mt-5 mx-auto">
        { type == "Login" ? 
            <>
            <h1 className="h1-pink">Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmailLogin">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value);
                    console.log("email", email);
                    }}
                    type="email"
                    placeholder="Enter your email"
                />
                </Form.Group>
                <Form.Group className="mb-1" controlId="formBasicPasswordLogin">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={password}
                    onChange={(e) => {
                    setPassword(e.target.value);
                    console.log("password", password);
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
          </>
          : 
          <>
            <h1 className="h1-pink">Join Flink</h1>
            <Form onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicEmailSignup">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    value={email}
                    onChange={(e) => {
                    setEmail(e.target.value);
                    console.log("email", email);
                    }}
                    type="email"
                    placeholder="Enter your email"
                />
                </Form.Group>
                <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    value={username}
                    onChange={(e) => {
                    setUsername(e.target.value);
                    console.log("setUsername", setUsername);
                    }}
                    placeholder="flink/your-username.com"
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPasswordignup">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={password}
                    onChange={(e) => {
                    setPassword(e.target.value);
                    console.log("password", password);
                    }}
                    placeholder="Choose a password"
                />
                </Form.Group>
                <button className="green-button">Create Account</button>
            </Form>
            <p className="already-account">
                Already have an account? 
                <button className="just-text-button" onClick={() => setType("Login")}>Sign in</button>
            </p>
          </> }
        </div>
      </div>
    </div>
  );
}
