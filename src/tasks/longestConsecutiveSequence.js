/* Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
For example, given [100, 4, 200, 1, 3, 2], 
the longest consecutive element sequence is [1, 2, 3, 4]. Return its length: 4.
Your algorithm should run in O(n) complexity.
*/

const longestConsecutiveSequence = (arr) => {
  let result = 0;
  const setNumbers = new Set();

  arr.forEach(element => setNumbers.add(element));

  // check each possible sequence from the start then update optimal length 
  for (let i = 0; i < arr.length; i += 1) {
    let count = 1;

    let down = arr[i] - 1;
    while (setNumbers.has(down)){
      setNumbers.delete(down);
      down -= 1;
      count += 1;
    }

    let up = arr[i] + 1;
    while (setNumbers.has(up)){
      setNumbers.delete(up);
      up += 1;
      count += 1;
    }

    result = Math.max(result, count);
  }

  return result;
};

export default longestConsecutiveSequence;