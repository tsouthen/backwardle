import Maybes from './Maybes'
import './GameBoard.css';

const BLOCK_CLASS_MAP = {
  0: 'letter-untouched',
  1: 'letter-incorrect',
  2: 'letter-misplaced',
  3: 'letter-correct',
}

function GameBoard({ recap }) {
  const lines = new Array(6).fill().map(() => new Array(5).fill(0));
  (recap && recap.guesses || [[]]).forEach((word, i) => {
    word.forEach((guess, j) => {
      lines[i][j] = guess;
    });
  });

  return (
    <div className="GameBoard">
      { lines.map((row, i) => {
        return (
          <div key={`row-${i}`} className='wordRow'>
            { recap && <Maybes row={ row } target={ recap.solution.text } />}
            { row.map((guess, j) => {
                return (
                  <div key={`letter-${i}-${j}`} className={`letter ${BLOCK_CLASS_MAP[guess]}`}></div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default GameBoard;
