import { useCallback } from 'react';
import './GamePicker.css';

function GamePicker({ onChange, solution }) {
  const handleInputChange = useCallback(event => {
    const index = event.target.value;
    onChange(index);
  }, [solution]);

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

export default GamePicker;
