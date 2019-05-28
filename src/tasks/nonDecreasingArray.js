// Given an array of integers, write a function to determine,
// whether the array could become non-decreasing by modifying at most 1 element.
// For example, given the array [10, 5, 7], you should return true,
// since we can modify the 10 into a 1 to make the array non-decreasing.

const couldBecomeNonDecreasing = (input) => {
  let allowedModification = 0;

  for (let i = 0; i < input.length; i += 1) {
    if (input[i] > input[i + 1]) {
      allowedModification += 1;
    }
  }
  
  return allowedModification <= 1;
};

export default couldBecomeNonDecreasing;