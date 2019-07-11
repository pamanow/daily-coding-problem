import { expect } from "chai";
import shortestUniquePrefix from './shortestUniquePrefix';

describe("shortestUniquePrefix function", () => {
  it('should return correct indexes', () => {
    const input = ['dog', 'cat', 'apple', 'apricot', 'fish'];
    const expected = ['d', 'c', 'app', 'apr', 'f'];

    expect(shortestUniquePrefix(input)).to.equal(expected);
  });
});