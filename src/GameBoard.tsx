import React from 'react';
import Maybes from './Maybes'
import WorldleRecap from './WorldleRecap';
import './GameBoard.css';

const BLOCK_CLASS_MAP = [
  'letter-untouched',
  'letter-incorrect',
  'letter-misplaced',
  'letter-correct',
];

export default function GameBoard({recap} : { recap: WorldleRecap|undefined }) {
  const lines = new Array<Array<number>>(6).fill([]).map(() => new Array<number>(5).fill(0));
  ((recap && recap.guesses) || [[]]).forEach((word, i) => {
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
