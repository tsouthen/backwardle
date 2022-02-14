import { solutions } from './solutions';

const WORDLE_STARTED_ON = new Date('Sat Jun 19 2021');

const indexStartDate = (index) => {
  const date = new Date(WORDLE_STARTED_ON.valueOf());
  date.setDate(date.getDate() + Number(index));
  return date;
}

class WorldleSolution {
  constructor(index) {
    this.index = index;
    this.text = solutions[index];
    this.startedOn = indexStartDate(index);
    Object.freeze(this);
  }

  static fromDate(startedOn) {
    const diffTime = startedOn - WORDLE_STARTED_ON;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return new this(diffDays);
  }
}

export default WorldleSolution;
