import { expect } from "chai";
import getPrefixes from './shortestUniquePrefix';

describe("getPrefixes function", () => {
  it('should return correct prefixes', () => {
    const input = ['dog', 'cat', 'apple', 'apricot', 'fish'];
    const expected = ['d', 'c', 'app', 'apr', 'f'];

    expect(getPrefixes(input)).to.deep.equal(expected);
  });
});