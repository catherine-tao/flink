import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg"
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Exit from '../assets/exit.svg';
import Trash from '../assets/trash.svg';
import Chevron from "../assets/chevron.svg"

export default function Editor({ email }) {
    const [promptURL, setPromptURL] = useState("");
    const [productUrls, setProductUrls] = useState([]);
    const [isAddingLink, setIsAddingLink] = useState(false)
    const [navSelected, setNavSelected] = useState("Links")
    const [isPreview, setIsPreview] = useState(false)

    useEffect(() => {
        const getProductUrls = async () => {
          const res = await fetch(`http://localhost:3000/prompt/${email}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          const data = await res.json();
          const loadedUrls = data.productUrls
          console.log("loadedUrls", loadedUrls);
          setProductUrls(loadedUrls);
        };
    
        getProductUrls();
      }, []);

      const handlePromptSubmit = async (e) => {
        e.preventDefault();
        console.log("promptURL", promptURL);
    
        const res = await fetch(`http://localhost:3000/prompt/${email}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            promptURL,
          }),
        });
    
        const jsonData = await res.json();
        const userData = jsonData.userData
        console.log("userData", userData)
        if(userData) setProductUrls(userData);
        
      };

        
    const deleteUrl = async (url) => {
        const res = await fetch(`http://localhost:3000/prompt/delete/${email}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            url,
        }),
        });

        const data = await res.json();

        console.log("deleted data", data.newProductsUrl)

        // const newUrls = productUrls.filter((item) => item != url);
        setProductUrls(data.newProductsUrl);
    };

    return (
    <div className="background-filter vh-100">
      {!isPreview ? 
     <div className="white-right-panel-editor">
      <button style={{transform: "rotate(180deg)"}} className="chevron-button" onClick={() => setIsPreview(true)}>
        <img style={{width: "1rem"}} src={Chevron}></img>
      </button>
        <Navbar className="editor-navbar">
            <Container>
            <Navbar.Brand href="#home">
                <img
                src={Logo}
                width="100"
                height="30"
                className="d-inline-block align-top"
                alt="Flink Logo"
                />
            </Navbar.Brand>
            <Nav.Link onClick={() => setNavSelected("Links")}>Links</Nav.Link>
            <Nav.Link onClick={() => setNavSelected("Appearance")}>Appearance</Nav.Link>
            <Nav.Link onClick={() => setNavSelected("Analytics")}>Analytics</Nav.Link>
            <Nav.Link onClick={() => setNavSelected("Settings")}>Settings</Nav.Link>
            </Container>
        </Navbar>
        { navSelected == "Links" ?
        <div className="w-50 mt-5 mx-auto">
            <>
            { !isAddingLink ?
            <button onClick={() => setIsAddingLink(true)} className="green-button mt-5">
                Add Link
            </button> :
            <div className="add-link-div">
                <button className="exit-button" onClick={() => setIsAddingLink(false)}>
                    <img src={Exit}></img>
                </button>
            <Form className="w-100" onSubmit={handlePromptSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter a URL</Form.Label>
                    <Form.Control value={promptURL} onChange={(e) => setPromptURL(e.target.value)} 
                    className="w-100" placeholder="URL"/>
                </Form.Group>
            </Form>
            <button className="add-link-button" onClick={() => setIsAddingLink(false)} onSubmit={handlePromptSubmit}>
                Add
            </button>
            </div>
            }
            </>
            {productUrls &&
                productUrls.map((link) => {
                return (
                  <div className="link-display-div">
                    <div>
                      <p className="mb-0 font-weight-bold">Amazon Fleece Zip Up</p>
                      <p className="mb-0">https://www.amazon.ca/Amazon-Essentials-Standard-Quarter </p>
                    </div>
                    <button onClick={() => deleteUrl(link.url)} className="exit-button">
                      <img src={Trash}></img>
                    </button>
                </div>
                );
            })}
        </div> : 
         <div style={{marginTop: "10%"}} className="w-50 mx-auto text-center"><h1>{navSelected} Coming Soon</h1></div> }
      </div> : 
        <div className="closed-white-tab">
          <button className="chevron-button" onClick={() => setIsPreview(false)}>
            <img style={{width: "1rem"}} src={Chevron}></img>
          </button>
        </div>
      }
    </div>
  );
}