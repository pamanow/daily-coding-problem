import { expect } from 'chai';
import longestConsecutiveSequence from './longestConsecutiveSequence';

describe('longestConsecutiveSequence function', () => {
  it('should return 1 when there is no constant sequence', () => {
    const input = [1, 4, 9];

    expect(longestConsecutiveSequence(input)).to.be.equal(1);
  });

  it('should return longest consecutive sequence', () => {
    expect(longestConsecutiveSequence([1, 2, 4, 5, 7, 8])).to.be.equal(2);
    expect(longestConsecutiveSequence([1, 2, 3, 4, 7, 8])).to.be.equal(4);
  });
});