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
  const [isPurpleBoxEnabled, setIsPurpleBoxEnabled] = useState(false); 


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

  const togglePurpleBox = () => {
    setIsPurpleBoxEnabled(!isPurpleBoxEnabled);
  }

  return (
  <div className={`accessibility-panel-${theme}`}>
    <div className="x-close" onClick={closeAccessibilityPanel}></div>
    <h2><b>OWAY</b></h2>
    <div className='panel-config'>
      <label htmlFor="dimColors" className="flex-container ">
        <span className="mr-2">Dim Colors:</span>
        <input
          type="checkbox"
          id="dimColors"
          checked={isDimmed}
          onChange={toggleDim}
          className="checkbox-input"
        />
                <div className='align-right'>

        {isDimmed && '✅'}
        {!isDimmed && '❌'}
        </div>
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
      <div className='align-right'>

      {isBright && '✅'}
      {!isBright && '❌'}
      </div>

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
              <div className='align-right'>

      {isContrast && '✅'}
      {!isContrast && '❌'}
</div>
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
              <div className='align-right'>

      {isGrey && '✅'}
      {!isGrey && '❌'}
</div>
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
                <div className='align-right'>

        {isLargeText && '✅'}
        {!isLargeText && '❌'}
</div>
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
        <div className='align-right'>
        {showCursorBlock && '✅'}
        {!showCursorBlock && '❌'}
        </div>

      </label>
      </div>
      <p>Cognitive assistance:</p>
      <button className="buttons-boxes" onClick={toggleBlueBox}>Text</button>
      <button className="buttons-boxes" onClick={toggleGreenBox}>Buttons</button>
      <button className="buttons-boxes" onClick={togglePurpleBox}>Links</button>
      {isBlueBoxEnabled && (
        <style>
          {`
            h1, h2, h3, h4, h5, h6, p {
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
      {isPurpleBoxEnabled && (
        <style>
          {`
            a {
              border: 2px solid purple;
              text-decoration: underline;
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
