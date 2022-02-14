import { useCallback, useEffect } from 'react';

import './ShareSnippet.css';

function ShareSnippet({ snippet, onPaste }) {
  const handleUserPaste = useCallback(event => {
    event.preventDefault();
    let clipText = (event.clipboardData || window.clipboardData).getData('text');
    onPaste(clipText);
  }, []);

  useEffect(() => {
    window.addEventListener("paste", handleUserPaste);
    return () => {
      window.removeEventListener("paste", handleUserPaste);
    };
  }, [handleUserPaste]);

  if(snippet=="") {
    return (<div className="ShareSnippet">
      <div className="ShareSnippet-prompt">CTRL + V</div>
    </div>);
  };
  return (
    <div className="ShareSnippet">
      <div>FromClipboard:</div>
      <div id='pasted-result' className="showLineBreaks">{snippet}</div>
    </div>
  );
}

export default ShareSnippet;
