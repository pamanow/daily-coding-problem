export const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 1; j < arr.length; j += 1) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
}
