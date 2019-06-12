const mergeSortedArrays = (leftArray, rightArray) => {
  let sortedArray = [];

  while (leftArray.length && rightArray.length) {
    let minimumElement = null;

    // Find minimum element of two arrays.
    if (leftArray[0] <= rightArray[0]) {
      minimumElement = leftArray.shift();
    } else {
      minimumElement = rightArray.shift();
    }
    
    sortedArray.push(minimumElement);
  }

  // If one of two array still have elements we need to just concatenate
  // this element to the sorted array since it is already sorted.
  if (leftArray.length) {
    sortedArray = sortedArray.concat(leftArray);
  }

  if (rightArray.length) {
    sortedArray = sortedArray.concat(rightArray);
  }

  return sortedArray;
};

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mergeSort(left)
  right = mergeSort(right)

  return mergeSortedArrays(left, right);
};

export default mergeSort;