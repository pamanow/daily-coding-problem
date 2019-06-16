import { expect } from "chai";
import maxStockProfit from './maxStockProfit';

describe("maxStockProfit function", () => {
  describe('should return 0 when there is no chance to gain a profit:', () => {
    it('prices are growing', () => {
      expect(maxStockProfit([7, 5, 3, 1], 2)).to.equal(0);
    });
   
    it('limit is equal zero', () => {
      expect(maxStockProfit([7, 10, 3, 1], 0)).to.equal(0);
    });

    it('price list size is lower than two', () => {
      expect(maxStockProfit([1], 3)).to.equal(0);
      expect(maxStockProfit([], 3)).to.equal(0);
    });
  });

  describe('should return profit value:', () => {
    it('prices grows and decreases and limit is two', () => {
      expect(maxStockProfit([1, 4, 1, 4], 2)).to.equal(6);
    });

    it('prices grows and decreases and limit is one', () => {
      expect(maxStockProfit([1, 4, 1, 4], 1)).to.equal(3);
    });

    it('maximal for given price list and limit', () => {
      expect(maxStockProfit([1, 3, 1, 3, 1, 10, 1, 10], 2)).to.equal(18);
      expect(maxStockProfit([1, 3, 1, 6, 1, 9], 1)).to.equal(8);
    });
  });
});