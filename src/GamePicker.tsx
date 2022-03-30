import React from 'react';
import './GamePicker.css';
import WorldleSolution from './WorldleSolution';

export default function GamePicker({onChange, solution}: { onChange: (index: number) => void, solution: WorldleSolution }) {
  const handleInputChange = React.useCallback(event => {
    onChange(event.target.value);
  }, [onChange]);

  return (
    <div className="GamePicker">
      <label htmlFor="game-number">Worldle #</label>
      <input
        name="game-number"
        className="gameNumberInput"
        type="number"
        value={solution.index}
        onChange={handleInputChange}
        ></input>
      <span> { solution.startedOn.toDateString() }</span>
    </div>
  );
}
