// Given a sorted list of integers, square the elements and give the output in sorted order.
// For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

const input =  [-9, -2, 0, 2, 3];

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
