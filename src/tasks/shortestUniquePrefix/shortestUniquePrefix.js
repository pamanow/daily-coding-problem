const getLongestWord = (list) => list.reduce((longest, current) => longest.length < current.length ? current : longest , '');

const comparePrefixes = (prefixes, word) => {
  if (!prefixes.length) {
    return word[0];
  }

  const filteredPrefixes = prefixes.filter(elem => elem.charAt(0) === word[0]);
  const longestPrefix = getLongestWord(filteredPrefixes);

  for (let i = 0; i < longestPrefix.length; i += 1) {
    if (longestPrefix[i] !== word[i]) {
      return word.slice(0, i);
    }

    return word;
  }
};

const shortestUniquePrefix = (list) => {
  const prefixes = [];

  for (let i = 0; i < list.length; i += 1) {
    let prefix = comparePrefixes(prefixes, list[i]);
    prefixes.push(prefix);
  }

  return prefixes;
};

export default shortestUniquePrefix;
