import { solutions } from './solutions';

const WORDLE_STARTED_ON = new Date('Sat Jun 19 2021');

const indexStartDate = (index: number) => {
  const date = new Date(WORDLE_STARTED_ON.valueOf());
  date.setDate(date.getDate() + Number(index));
  return date;
}

export default class WorldleSolution {
  public readonly index: number;
  public readonly text: string;
  public readonly startedOn: Date;

  constructor(index: number) {
    this.index = index;
    this.text = solutions[index];
    this.startedOn = indexStartDate(index);
  }

  static fromDate(startedOn: Date) {
    const diffTime = startedOn.getTime() - WORDLE_STARTED_ON.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return new this(diffDays);
  }
}
