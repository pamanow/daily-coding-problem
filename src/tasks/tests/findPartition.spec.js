import { expect } from "chai";
import findPartition from '../findPartition';

describe('findpartition function', () => {
  it('should return true, if given set can be partitioned into two subsets', () => {
    expect(findPartition([1, 2, 3, 6])).to.be.equal(true);
  });

  it('should return false, if given set can not be partitioned into two subsets', () => {
    expect(findPartition([1, 2, 3, 6, 7])).to.be.equal(false);
  });
});