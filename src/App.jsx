import React, { useState } from 'react';
import ColorDimmer from './Components/ColorDimmer';
import './App.css';

function App() {
  const [showCursorBlock, setShowCursorBlock] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [colorDimmerOpen, setColorDimmerOpen] = useState(false); // State to track whether color dimmer is open

  const toggleColorDimmer = () => {
    setColorDimmerOpen(!colorDimmerOpen);
  };

  const closeColorDimmer = () => {
    setColorDimmerOpen(false); // Close the color dimmer
  };

  return (
    <>
    
    <div className="min-h-screen items-center justify-center bg-gray-100 transition-colors duration-500 dimmed:bg-gray-600 relative pt-10 pl-10 pr-10">
        
      <h1>Hello! Welcome to OpenWebAY!</h1>
      <p className="">Some of this may be hard to read</p>
        <p className="text-sm">Some might be too small</p>
        <p className="text-yellow-400">Some might be too bright</p>
        <p className="text-gray-900">Some might be too dark</p>
        <p>Other text might simply just be hard for all people to digest. Accessibility concerns such as...
        <ul>
          <li>Seizures</li>
          <li>ADHD or ADD</li>
          <li>Dislexia</li>
          <li> & much more</li>
        </ul>
        ... make it extremely hard for certain communities to digest the internet.</p>
        <p>That is why I made this component, to freely share accessibility across the internet. :)</p>

        {!colorDimmerOpen && (
          <button
            onClick={toggleColorDimmer}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 fixed bottom-4 right-4"
          >
            Open Accessibility Controller
          </button>
        )}
        
        {colorDimmerOpen && (
          <ColorDimmer
            showCursorBlock={showCursorBlock}
            setShowCursorBlock={setShowCursorBlock}
            cursorPosition={cursorPosition}
            setCursorPosition={setCursorPosition}
            closeColorDimmer={closeColorDimmer} // Pass the function to close the color dimmer
          />
        )}
        
        {showCursorBlock && (
          <>
            <div className="cursor-bar top-bar" style={{ top: cursorPosition.y - 140 }}></div>
            <div className="cursor-bar bottom-bar" style={{ top: cursorPosition.y + 40 }}></div>
          </>
        )}
        
      </div>
    </>
  );
}

export default App;
