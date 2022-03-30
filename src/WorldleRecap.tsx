import WorldleSolution from './WorldleSolution';

const SHARE_SNIPPET_REGEXP = /Wordle (?<gameNumber>[\d]+)/;

export default class WorldleRecap {
  public readonly guesses: number[][];
  public readonly solution: WorldleSolution;

  constructor(gameIndex: number, guesses: number[][]) {
    this.solution = new WorldleSolution(gameIndex);
    this.guesses = guesses;
    Object.freeze(this);
  }

  static fromShareText(sharedSnippet: string) {
    const [header, , ...blocks] = sharedSnippet.split('\n')
    const { gameNumber } = header.match(SHARE_SNIPPET_REGEXP)!.groups!;
    const gameIndex = Number(gameNumber);
    const guesses = blocks.map((guess) => {
      return guess
        .replaceAll('⬛', '1')
        .replaceAll('⬜', '1')
        .replaceAll('🟨', '2')
        .replaceAll('🟩', '3')
        .split('')
        .map(Number);
    });
    return new this(gameIndex, guesses)
  }
}
