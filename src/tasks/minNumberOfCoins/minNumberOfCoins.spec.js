import { expect } from "chai";
import minNumberOfCoins from './minNumberOfCoins';



describe("minNumberOfCoins function", () => {
  it('should return proper number of required coins', () => {
    const PLN_DENO = [50, 20 , 10, 5, 2, 1];

    expect(minNumberOfCoins(PLN_DENO, 71)).to.equal(3);
    expect(minNumberOfCoins(PLN_DENO, 50)).to.equal(1);
    expect(minNumberOfCoins(PLN_DENO, 4)).to.equal(2);
    expect(minNumberOfCoins(PLN_DENO, 60)).to.equal(2);
  });
  
  it('should return 0, when there is no possibility to exchange value', () => {
    const deno = [50, 40, 20];

    expect(minNumberOfCoins(deno, 10)).to.equal(0);
  });
});