const minimumDistance = (phase, firstWord, secondWord) => {
  const words = phase.split(' ');
  let prev;
  let minDistance = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < words.length; i += 1) {
    if (words[i] === firstWord || words[i] === secondWord) {
      prev = i;
      break;
    }
  }

  for (let i = prev + 1; i < words.length; i += 1) {
    if (words[i] === firstWord || words[i] === secondWord) {
      if (words[i] !== words[prev] && (i - prev) < minDistance) {
        minDistance = i - prev; 
        prev = i;
      } else {
        prev = i;
      }
    }
  }

  return minDistance - 1;
};

export default minimumDistance;