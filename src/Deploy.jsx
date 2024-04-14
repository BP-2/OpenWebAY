import React, { useState } from 'react';
import AccessibilityPanel from './Components/AccessibilityPanel';
import './App.css';
import './index.css';

function Deploy() {
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
    
    <div className="ally-container">
        {!accessibilityPanelOpen && (
          <button
            onClick={toggleAccessibilityPanel}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 fixed bottom-4 right-4"
          >
            Open Accessibility Controller
          </button>
        )}
        
        {accessibilityPanelOpen && (
          <AccessibilityPanel
            showCursorBlock={showCursorBlock}
            setShowCursorBlock={setShowCursorBlock}
            cursorPosition={cursorPosition}
            setCursorPosition={setCursorPosition}
            closeAccessibilityPanel={closeAccessibilityPanel} // Pass the function to close the color dimmer
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
