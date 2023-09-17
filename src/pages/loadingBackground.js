import React, { useState, useEffect } from 'react';
import LoadingBar from './loadingBar';
import Flowers from "../assets/Flowers.png"
import Logo from "../assets/Logo.svg"
import Form from 'react-bootstrap/Form';
import Prompt from './Prompt';
import Editor from './editor';

export default function LoadingBackground({ email, colorTheme, insta, youtube, tiktok, backgroundUrl}) {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [allowProceed, setAllowProceed] = useState(false);
    console.log("loading email", email)
    console.log("loading backgroundUrl", backgroundUrl)

  useEffect(() => {
    // Simulate loading progress (e.g., using setTimeout)
    const simulateLoading = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        if (progress >= 100) {
          clearInterval(interval);
          setAllowProceed(true);
        }
        setLoadingProgress(progress);
      }, 200);
    };

    simulateLoading(); // Start simulating loading progress
  }, []);

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
          <h1 className="h1-pink">Generating your personal page background...</h1>
          <div className="loading-bar-padding">
            <LoadingBar progress={loadingProgress} />
          </div>
          {allowProceed && <Editor email={email} colorTheme={colorTheme} insta={insta} youtube={youtube} tiktok={tiktok}/>}
        </div>
      </div>
    </div>
  );
}
