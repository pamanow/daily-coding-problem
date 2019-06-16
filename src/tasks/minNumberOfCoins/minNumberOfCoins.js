function minNumberOfCoins (denominations, value) {
  let result = 0;
  const sorted = denominations.sort((a, b) => b - a); // make sure deno is sorted descending

  // Traverse through all sorted denomination 
  for (let i = 0; i < sorted.length; i += 1) {
    while (value >= sorted[i]) {
      value -= sorted[i];
      result += 1;
    }
  }

  return result;  
}

export default minNumberOfCoins;