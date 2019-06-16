const square = (number) => number * number;

const sortSquares = (input) => {
  const result = [];
  let start = 0;
  let end = input.length - 1;
  let id = end;

  while (start <= end) {
    result[id--] = square((-input[start] > input[end]) ? input[start++] :input[end--])
  }

  return result;
};

export default sortSquares; 
