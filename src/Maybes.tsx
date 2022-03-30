import React from 'react';
import { dictionary } from './dictionary';
import { solutions } from './solutions';

const allWords = solutions.concat(dictionary);

const GUESS_TESTS = [
  (word: string, target: string, i: number) => word[i] !== target[i] && !target.includes(word[i]),
  (word: string, target: string, i: number) => word[i] !== target[i] && target.includes(word[i]),
  (word: string, target: string, i: number) => word[i] === target[i],
]

const possibilities = (row: Array<number>, target: string) => {
  if (row.every((g) => g === 0) || row.every((g) => g === 1)) 
    return [];

  return allWords.filter((word) => {
    return row.every((guess, i: number) => {
      return GUESS_TESTS[guess-1](word, target, i);
    });
  });
}

export default function Maybes({ row, target }: { row: Array<number>, target: string }) {
  const options = possibilities(row, target);
  if (options.length === 0)
    return null;
  return (
    <div className="Maybes">
      { options.length && <div>{ options.length }</div> }
      <select>
        {
          options.map((word, i) => {
            return <option key={`option-${i}`}>{ word }</option>;
          })
        }
      </select>
    </div>
  );
}
