import { expect } from "chai";
import getElementWhichAppearsOnce from './elementAppearsOnce';

describe('getElementWhichAppearsOnce function', () => {
  it('should return element, which appear in array only once.', () => {
    const arr = [2, 3, 5, 4, 5, 3, 4];
    expect(getElementWhichAppearsOnce(arr)).to.be.equal(2);
  });
});