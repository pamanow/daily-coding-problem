import { expect } from 'chai';
import getItinerary from '../getItinerary';

describe('getItinerary', () => {
  it('shoult return proper path', () => {
    const input = [['SFO', 'HKO'], ['YYZ', 'SFO'], ['YUL', 'YYZ'], ['HKO', 'ORD']];
    const startingPoint = 'YUL';
    const expected = ['YUL', 'YYZ', 'SFO', 'HKO', 'ORD'];

    expect(getItinerary(input, startingPoint)).to.deep.equal(expected);
  });

  it('should return null when there is no proper path', () => {
    const input = [['SFO', 'COM'], ['COM', 'YYZ']];

    expect(getItinerary(input, 'COM')).to.be.a('null');
  });

  it('should return lexicographically smaller path', () => {
    const input = [['A', 'B'], ['A', 'C'], ['B', 'C'], ['C', 'A']];
    const expected = ['A', 'B', 'C', 'A', 'C'];

    expect(getItinerary(input, 'A')).to.deep.equal(expected);
  });
});