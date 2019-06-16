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