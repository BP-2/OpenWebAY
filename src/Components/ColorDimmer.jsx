import React, { useState, useEffect } from 'react';
const Checkmark = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-check"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ColorDimmer = ({ showCursorBlock, setShowCursorBlock, cursorPosition, setCursorPosition, closeColorDimmer}) => {
  const [isDimmed, setIsDimmed] = useState(false);
  const [isBright, setIsBright] = useState(false);
  const [isContrast, setIsContrast] = useState(false);
  const [isGrey, setIsGrey] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [isBlueBoxEnabled, setIsBlueBoxEnabled] = useState(false); // State for enabling/disabling blue box feature
  const [isGreenBoxEnabled, setIsGreenBoxEnabled] = useState(false); // State for enabling/disabling green box feature

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY }); // Update cursorPosition state
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
  <div className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md p-1">
    <div class="x-close" onClick={closeColorDimmer}></div>
    <h2><b>Accessibility Controller</b></h2>
      <label htmlFor="colorDimmer" className="flex items-center cursor-pointer ml-4">
        <span className="mr-2">Dim Colors:</span>
        <input
          type="checkbox"
          id="colorDimmer"
          checked={isDimmed}
          onChange={toggleDim}
          className="h-6 w-6 rounded-md bg-gray-300 appearance-none focus:outline-none cursor-pointer checkbox-input"
        />
        {isDimmed && '✅'}
        {!isDimmed && '❌'}
      </label>
      <label htmlFor="contrastColors" className="flex items-center cursor-pointer ml-4">
      <span className="mr-2">Bright colors:</span>
      <input
        type="checkbox"
        id="contrastColors"
        checked={isContrast}
        onChange={toggleContrast}
        className="h-6 w-6 rounded-md bg-gray-300 appearance-none focus:outline-none cursor-pointer checkbox-input"
      />
      {isContrast && '✅'}
      {!isContrast && '❌'}

      </label>
      <label htmlFor="brightColors" className="flex items-center cursor-pointer ml-4">
      <span className="mr-2">Brightness:</span>
      <input
        type="checkbox"
        id="colorBright"
        checked={isBright}
        onChange={toggleBright}
        className="h-6 w-6 rounded-md bg-gray-300 appearance-none focus:outline-none cursor-pointer checkbox-input"
      />
      {isBright && '✅'}
      {!isBright && '❌'}

      </label>
      <label htmlFor="greyColors" className="flex items-center cursor-pointer ml-4">
      <span className="mr-2">Greyscale:</span>
      <input
        type="checkbox"
        id="greyColors"
        checked={isGrey}
        onChange={toggleGrey}
        className="h-6 w-6 rounded-md bg-gray-300 appearance-none focus:outline-none cursor-pointer checkbox-input"
      />
      {isGrey && '✅'}
      {!isGrey && '❌'}

      </label>
      <label htmlFor="largeText" className="flex items-center cursor-pointer ml-4">
        <span className="mr-2">Large Text:</span>
        <input
          type="checkbox"
          id="largeText"
          checked={isLargeText}
          onChange={toggleLargeText}
          className="h-6 w-6 rounded-md bg-gray-300 appearance-none focus:outline-none cursor-pointer checkbox-input"
        />
        {isLargeText && '✅'}
        {!isLargeText && '❌'}

      </label>
      <label htmlFor="cursorBlock" className="flex items-center cursor-pointer ml-4">
        <span className="mr-2">Cursor Block:</span>
        <input
          type="checkbox"
          id="cursorBlock"
          checked={showCursorBlock}
          onChange={toggleCursorBlock}
          className="h-6 w-6 rounded-md bg-gray-300 appearance-none focus:outline-none cursor-pointer checkbox-input"
        />
        {showCursorBlock && '✅'}
        {!showCursorBlock && '❌'}

      </label>
      <p>Cognitive display settings:</p>
      <button onClick={toggleBlueBox}>Text Boxes</button>
      <button onClick={toggleGreenBox}>Buttons</button>
      

      
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
    </div>
  );
};

export default ColorDimmer;
