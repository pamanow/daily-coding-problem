import { expect } from "chai";
import couldBecomeNonDecreasing from '../nonDecreasingArray';

describe("CouldBecomeNonDecreasing function", () => {
  it('should return true when array could be non-decreasing by one modification', () => {
    const input =  [10, 5, 7];
    expect(couldBecomeNonDecreasing(input)).to.equal(true);
  });

  it('should return false when array could not be non-decreasing by one modification', () => {
    const input = [10, 5, 7, 1];
    expect(couldBecomeNonDecreasing(input)).to.equal(false);
  });

  it('should return true when array is already decreasing', () => {
    const input = [1, 5, 8, 9, 11];
    expect(couldBecomeNonDecreasing(input)).to.equal(true);
  });
});