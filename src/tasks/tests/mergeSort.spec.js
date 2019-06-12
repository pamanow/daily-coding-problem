import { expect } from "chai";
import mergeSort from '../../data-structures/sort/mergeSort';

describe('mergeSort', () => {
  it('should return original array when length is equal 1', () => {
    expect(mergeSort([1])).to.be.deep.equal([1]);
  });

  it('should return sorted array', () => {
    expect(mergeSort([9, 8, 4, 7, 10, 3, 2, 1])).to.be.deep.equal([1, 2, 3, 4, 7, 8, 9, 10]);
  });
});