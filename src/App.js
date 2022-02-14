import { useState } from 'react';
import GamePicker from './GamePicker';
import GameBoard from './GameBoard';
import ShareSnippet from './ShareSnippet';
import WorldleRecap from './WorldleRecap';
import WorldleSolution from './WorldleSolution';

import './App.css';

const todaysSolution = WorldleSolution.fromDate(new Date());

function App() {
  const [snippet, setSnippet] = useState('');
  const [solution, setSolution] = useState(todaysSolution);
  const [recap, setRecap] = useState();
  const onChangePick = (index) => {
    setSnippet('')
    const inputSolution = new WorldleSolution(index);
    setSolution(inputSolution)
  }
  const onPaste = (clipText) => {
    const recap = WorldleRecap.fromShareText(clipText);
    setSnippet(clipText);
    setRecap(recap);
    setSolution(recap.solution);
  }

  return (
    <div className="App">
      <h1>What Were They Thinking?</h1>
      <ShareSnippet snippet={ snippet } onPaste={ onPaste } />
      <GamePicker solution={ solution } onChange={ onChangePick } />
      <GameBoard recap={ recap } />
    </div>
  );
}

export default App;
