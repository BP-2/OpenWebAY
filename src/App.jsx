import React, { useState } from 'react';
import Deploy from './Deploy';
import './App.css';

function App() {
  const [showCursorBlock, setShowCursorBlock] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [accessibilityPanelOpen, setAccessibilityPanelOpen] = useState(false); // State to track whether color dimmer is open

  const toggleAccessibilityPanel = () => {
    setAccessibilityPanelOpen(!accessibilityPanelOpen);
  };

  const closeAccessibilityPanel = () => {
    setAccessibilityPanelOpen(false); // Close the color dimmer
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
        <Deploy theme='blue'/>
      </div>
    </>
  );
}

export default App;
