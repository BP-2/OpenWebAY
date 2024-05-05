import React, { useState, useEffect } from 'react';
import "../WebAY.css";

const accessibilityPanel = ({ showCursorBlock, setShowCursorBlock, cursorPosition, setCursorPosition, closeAccessibilityPanel, theme}) => {
  const [isDimmed, setIsDimmed] = useState(false);
  const [isBright, setIsBright] = useState(false);
  const [isContrast, setIsContrast] = useState(false);
  const [isGrey, setIsGrey] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isBlueBoxEnabled, setIsBlueBoxEnabled] = useState(false); 
  const [isGreenBoxEnabled, setIsGreenBoxEnabled] = useState(false); 

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY }); 
    };

    if (showCursorBlock) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [showCursorBlock, setCursorPosition]);

  const toggleDim = () => {
    setIsDimmed(!isDimmed);
    if (!isDimmed) {
      document.documentElement.classList.add('dimmed');
    } else {
      document.documentElement.classList.remove('dimmed');
    }
  };
  const toggleBright = () => {
    setIsBright(!isBright);
    if (!isBright) {
      document.documentElement.classList.add('bright');
    } else {
      document.documentElement.classList.remove('bright');
    }
  };
  const toggleContrast = () => {
    setIsContrast(!isContrast);
    if (!isContrast) {
      document.documentElement.classList.add('contrast');
    } else {
      document.documentElement.classList.remove('contrast');
    }
  };
  const toggleGrey = () => {
    setIsGrey(!isGrey);
    if (!isGrey) {
      document.documentElement.classList.add('grey-scale');
    } else {
      document.documentElement.classList.remove('grey-scale');
    }
  };
  const toggleLargeText = () => {
    setIsLargeText(!isLargeText);
    if (!isLargeText) {
      document.documentElement.classList.add('large-text');
    } else {
      document.documentElement.classList.remove('large-text');
    }
  };
  const toggleCursorBlock = () => {
    setShowCursorBlock(!showCursorBlock);
    if (!showCursorBlock) {
      document.documentElement.classList.add('cursor-block');
    } else {
      document.documentElement.classList.remove('cursor-block');
    }
  };
  const toggleBlueBox = () => {
    setIsBlueBoxEnabled(!isBlueBoxEnabled);
  };

  const toggleGreenBox = () => {
    setIsGreenBoxEnabled(!isGreenBoxEnabled);
  };

  return (
  <div className={`accessibility-panel-${theme}`}>
    <div className="x-close" onClick={closeAccessibilityPanel}></div>
    <h2><b>Accessibility Controller</b></h2>
      <label htmlFor="dimColors" className="flex-container ">
        <span className="mr-2">Dim Colors:</span>
        <input
          type="checkbox"
          id="dimColors"
          checked={isDimmed}
          onChange={toggleDim}
          className="checkbox-input"
        />
        {isDimmed && '✅'}
        {!isDimmed && '❌'}
      </label>
      <label htmlFor="brightColors" className="flex-container ">
      <span className="mr-2">Brightness:</span>
      <input
        type="checkbox"
        id="brightColors"
        checked={isBright}
        onChange={toggleBright}
        className="checkbox-input"
      />
      {isBright && '✅'}
      {!isBright && '❌'}

      </label>
      <label htmlFor="contrastColors" className="flex-container ">
      <span className="mr-2">High Contrast:</span>
      <input
        type="checkbox"
        id="contrastColors"
        checked={isContrast}
        onChange={toggleContrast}
        className="checkbox-input"
      />
      {isContrast && '✅'}
      {!isContrast && '❌'}

      </label>
      
      <label htmlFor="greyColors" className="flex-container ">
      <span className="mr-2">Greyscale:</span>
      <input
        type="checkbox"
        id="greyColors"
        checked={isGrey}
        onChange={toggleGrey}
        className="checkbox-input"
      />
      {isGrey && '✅'}
      {!isGrey && '❌'}

      </label>
      <label htmlFor="largeText" className="flex-container ">
        <span className="mr-2">Large Text:</span>
        <input
          type="checkbox"
          id="largeText"
          checked={isLargeText}
          onChange={toggleLargeText}
          className="checkbox-input"
        />
        {isLargeText && '✅'}
        {!isLargeText && '❌'}

      </label>
      <label htmlFor="cursorBlock" className="flex-container ">
        <span className="mr-2">Cursor Block:</span>
        <input
          type="checkbox"
          id="cursorBlock"
          checked={showCursorBlock}
          onChange={toggleCursorBlock}
          className="checkbox-input"
        />
        {showCursorBlock && '✅'}
        {!showCursorBlock && '❌'}

      </label>
      <p>Cognitive display settings:</p>
      <button className="buttons-boxes" onClick={toggleBlueBox}>Text Boxes</button>
      <button className="buttons-boxes" onClick={toggleGreenBox}>Buttons</button>
      

      
      {isBlueBoxEnabled && (
        <style>
          {`
            .text-box {
              border: 2px solid blue;
              padding: 5px;
              margin: 5px;
            }

            h1, h2, h3, h4, h5, h6 {
              border: 2px solid blue;
              padding: 5px;
              margin: 5px;
            }
          `}
        </style>
      )}
      {isGreenBoxEnabled && (
        <style>
          {`
            button {
              border: 2px solid green;
              padding: 5px;
              margin: 5px;
            }
          `}
        </style>
      )}
      <div>
          <a className={`npm-link-${theme}`} href="https://www.npmjs.com/package/open-web-ay?activeTab=readme">Find us on <u>NPM</u>!</a>
      </div>
    </div>
  );
};

export default accessibilityPanel;
