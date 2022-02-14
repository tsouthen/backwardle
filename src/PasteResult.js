import { useCallback, useEffect, useState } from 'react';
import Maybes from './Maybes';

import './PasteResult.css';

import React from 'react';

function PasteResult() {
  const [userText, setUserText] = useState("");
  const handleUserPaste = useCallback(event => {
    let clipText = (event.clipboardData || window.clipboardData).getData('text');
    setUserText(clipText);
    console.log('paste!')
    event.preventDefault();
  }, []);

  useEffect(() => {
      window.addEventListener("paste", handleUserPaste);
      return () => {
          window.removeEventListener("paste", handleUserPaste);
      };
  }, [handleUserPaste]);

  return (
    <div className="PasteResult">
      PasteResult
      <div className="showLineBreaks">FromClipboard:  {userText}</div>
    </div>
  );
}

export default PasteResult;
