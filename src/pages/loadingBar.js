import React from 'react';

function LoadingBar({ progress }) {
  return (
    <div className="loading-bar-container">
      <div
        className="loading-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default LoadingBar;
