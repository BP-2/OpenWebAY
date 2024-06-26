import React, { useState } from 'react';
import AccessibilityPanel from './Components/AccessibilityPanel';
import './App.css';
import './WebAY.css';
import Logo from "./assets/logo.png";
// <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Accessibility.svg" alt="Accessibility button. Logo credit to  Dave Braunschweig and distributed under the CC BY-SA 4.0 Deed license."/>

function Deploy({ theme }) {
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
      <div className={`ally-container`}>
        {!accessibilityPanelOpen && (
          <button
            onClick={toggleAccessibilityPanel}
            className={`closed-button-${theme}`}
          >
            <img className="logo-acc" src={Logo} alt="Accessibility button. Logo credit to  Dave Braunschweig and distributed under the CC BY-SA 4.0 Deed license."/>          
            </button>
        )}

        {accessibilityPanelOpen && (
          <AccessibilityPanel
            showCursorBlock={showCursorBlock}
            setShowCursorBlock={setShowCursorBlock}
            cursorPosition={cursorPosition}
            setCursorPosition={setCursorPosition}
            closeAccessibilityPanel={closeAccessibilityPanel} // Pass the function to close the color dimmer
            theme={theme}
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

export default Deploy;
