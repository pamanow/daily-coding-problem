import { expect } from  'chai';
import traverseCoinArray from '../traverseCoinArray';


describe('traverseCoinArray', () => {
  it('shoult return proper value while only right traversing', () => {
    const input = [[1, 1, 1], [2, 2, 2], [3, 3, 3]];

    expect(traverseCoinArray(input)).to.be.equal(9);
  });

  it('shoult return proper value for same value on different paths', () => {
    const input = [[5, 1, 1,], [1, 5, 1], [1, 5, 5]];

    expect(traverseCoinArray(input)).to.be.equal(15);
  });

  it('shoult return proper value with down/right traversing', () => {
    const input = [[5, 1, 1, 1], [10, 5, 4, 7], [4, 10, 5 , 1], [7, 5, 4, 9]];

    expect(traverseCoinArray(input)).to.be.equal(34);
  });
});