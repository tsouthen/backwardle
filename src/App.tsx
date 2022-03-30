import React from 'react';
import GamePicker from './GamePicker';
import GameBoard from './GameBoard';
import ShareSnippet from './ShareSnippet';
import WorldleRecap from './WorldleRecap';
import WorldleSolution from './WorldleSolution';

import './App.css';

const todaysSolution = WorldleSolution.fromDate(new Date());

export default function App() {
  const [snippet, setSnippet] = React.useState('');
  const [solution, setSolution] = React.useState(todaysSolution);
  const [recap, setRecap] = React.useState<WorldleRecap>();
  const onChangePick = (index: number) => {
    setSnippet('')
    const inputSolution = new WorldleSolution(index);
    setSolution(inputSolution)
  }
  const onPaste = (clipText: string) => {
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
