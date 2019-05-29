const isSubsetSum = (input, n, sum) => {
  // subset found, sum becomes 0
  if (sum == 0) {
    return true;
  }

  if (n < 0 || sum < 0) {
    return false;
  }

  //include current item in the subset (arr[n]) and recur
	// for remaining items (n - 1) with remaining sum (sum - arr[n])
  const include = isSubsetSum(input, n-1, sum - input[n]);

  // Case 2. exclude current item n from subset and recur for remaining items (n - 1)
  const exclude = isSubsetSum(input, n-1, sum);

  return include || exclude;
};

const findPartition = (input) => {
  const sum = input.reduce((prev, next) => prev + next, 0);
  
  if (sum % 2 !== 0) {
    // Sum is odd, there cannot be two subsets with equal sum
    return false;
  }

  return isSubsetSum(input, input.length, sum/2);
};

export default findPartition;