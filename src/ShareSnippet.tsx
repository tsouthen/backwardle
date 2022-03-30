import React from 'react';
import './ShareSnippet.css';

export default function ShareSnippet({ snippet, onPaste }: {snippet: string, onPaste: (clipText:string) => void}) {
  const handleUserPaste = React.useCallback(event => {
    event.preventDefault();
    onPaste(event.clipboardData.getData('text'));
  }, [onPaste]);

  React.useEffect(() => {
    window.addEventListener("paste", handleUserPaste);
    return () => {
      window.removeEventListener("paste", handleUserPaste);
    };
  }, [handleUserPaste]);

  return (
    <div className="ShareSnippet">
      <button onClick={async () => {
        const text = await navigator.clipboard.readText();
        if (text)
          onPaste(text);
      }}>
        <div className="ShareSnippet-prompt">Paste Shared Wordle</div>
      </button>
      <div id='pasted-result' className="showLineBreaks">{snippet}</div>
    </div>
  );
}
