/* Given an array of numbers representing the stock prices of a company in chronological order 
and an integer k, return the maximum profit you can make from k buys and sells. 
You must buy the stock before you can sell it, and you must sell the stock before you can buy it again.
For example, given k = 2 and the array [5, 2, 4, 0, 1], you should return 3.
*/

const maxStockProfit = (priceList, limit) => {
	let n = priceList.length;

	// profit[i][j] stores the maximum profit gained by doing at most i transactions till j'th day
	let profit = new Array(limit + 1);
	for (let k = 0; k < limit + 1; k += 1) {
		// fill array - sad mock of two dimentional array 
		profit[k] = new Array(n + 1);
	}

	for (let i = 0; i <= limit; i += 1) {
		let prevDiff = Number.NEGATIVE_INFINITY; // 

		for (let j = 0; j < n; j += 1) {
			// profit is 0 when: i = 0 i.e. for 0'th day, j = 0 i.e. no transaction is being performed

			if (i === 0 || j === 0) {
				profit[i][j] = 0;
			} else {
				prevDiff = Math.max(prevDiff, profit[i - 1][j - 1] - priceList[j - 1]);
				profit[i][j] = Math.max(profit[i][j - 1], priceList[j] + prevDiff);
			}
		}
	}

	return profit[limit][n - 1] || 0;
};

export default maxStockProfit;