import { expect } from "chai";
import sortSquares from './sortSquares';

describe("SquareSort function", () => {
  it('should square and sort array', () => {
    const input = [-9, -5, -3, 0, 1, 2, 3, 6, 7, 9];
    const expected = [0, 1, 4, 9, 9, 25, 36, 49, 81, 81];
    expect(sortSquares(input)).to.deep.equal(expected);
  });

  it('should return empty array for empty input', () => {
    expect(sortSquares([])).to.deep.equal([]);
  });
});