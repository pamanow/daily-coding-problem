const STARTING = '(';
const ENDING = ')';

const isBalanced = (input) => {
  let low = 0; 
  let hi = 0;
  const arr = input.split('');

  for (let i = 0; i < arr.length; i += 1) {
    low += arr[i] == STARTING ? 1 : -1;
    hi += arr[i] != ENDING ? 1 : -1;
    if (hi < 0) {
      break;
    }
    low = Math.max(low, 0);
  }

  return low == 0;
};

export default isBalanced;