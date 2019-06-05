import { expect } from 'chai';
import { bubbleSort } from '../bubbleSort';

describe('Bubble sort', () => {
  it('should return sorted array', () => {
    const arr = [10, 5, 3, 1, 2, 4, 9];
    expect(bubbleSort(arr)).to.be.deep.equal([1, 2, 3, 4, 5, 9, 10]);
  });
});