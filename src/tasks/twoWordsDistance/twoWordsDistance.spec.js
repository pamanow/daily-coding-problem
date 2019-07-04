import { expect } from "chai";
import minimumDistance from './twoWordsDistance';

describe("minimumDistance function", () => {
  it('should return min distance between two words in phase', () => {
    const input = 'ala ma kota kot nie ma ali';
    
    expect(minimumDistance(input, 'ala', 'ali')).to.be.equal(5);
    expect(minimumDistance(input, 'ala', 'ma')).to.be.equal(0);
    expect(minimumDistance(input, 'ma', 'kot')).to.be.equal(1);
  });
});