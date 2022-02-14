import { dictionary } from './dictionary';
import { solutions } from './solutions';

const allWords = dictionary.concat(solutions);

const GUESS_TESTS = {
  1: (word, target, i) => word[i] !== target[i] && !target.includes(word[i]),
  2: (word, target, i) => word[i] !== target[i] && target.includes(word[i]),
  3: (word, target, i) => word[i] === target[i],
}

const possibilities = (row, target) => {
  if(row.every((g) => g==0)) { return []; };
  if(row.every((g) => g==1)) { return []; };
  return allWords.filter((word) => {
    return row.every((guess, i) => {
      return GUESS_TESTS[guess](word, target, i);
    });
  });
}

function Maybes({ row, target }) {
  const options = possibilities(row, target);
  if(options.length == 0) { return ''; }
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

export default Maybes;
