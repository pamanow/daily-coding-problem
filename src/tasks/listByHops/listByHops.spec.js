import { expect } from "chai";
import listByHops from './listByHops';

describe('listByHops function', () => {
  it('should return true, if you can reach to the last index starting at index 0.', () => {
    expect(listByHops([2, 0, 1, 0])).to.be.equal(true);
  });

  it('should return true, if you can not reach to the last index starting at index 0.', () => {
    expect(listByHops([1, 1, 0, 1])).to.be.equal(false);
  });
});