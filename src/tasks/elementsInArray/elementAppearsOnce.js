/*
Let us consider the above example. Let ^ be xor operator.
result = 7 ^ 3 ^ 5 ^ 4 ^ 5 ^ 3 ^ 4
Since XOR is associative and commutative, above expression can be written as:
res = 7 ^ (3 ^ 3) ^ (4 ^ 4) ^ (5 ^ 5)  
    = 7 ^ 0 ^ 0 ^ 0
    = 7 ^ 0
    = 7 
*/

const getElementWhichAppearsOnce = (arr) => {
  let result = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    result = result ^ arr[i];
  }

  return result;
};

export default getElementWhichAppearsOnce;