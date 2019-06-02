import { expect } from "chai";
import calculateExperience from '../calculateExperience';

describe('calculateExperience function', () => {
  it('should calculate experience based on input data', () => {
    const exp = [{ from: '01-2015', to: '06-2015' }];

    expect(calculateExperience(exp)).to.be.equal(6);
  });

  it('should calculate experience with duplicated dates', () => {
    const exp = [
      { from: '01-2015', to: '03-2016' },
      { from: '01-2016', to: '06-2016' },
    ];

    expect(calculateExperience(exp)).to.be.equal(18);
  });
});
