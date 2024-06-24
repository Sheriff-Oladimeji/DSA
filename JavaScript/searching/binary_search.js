const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    midpoint = Math.floor((left + right) / 2);
    if (arr[midpoint] === target) {
      return midpoint;
    } else if (arr[midpoint] < target) {
      left = midpoint + 1;
    } else {
      right = midpoint - 1;
    }
  }
  return -1;
};

const myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const myTarget = 7;
const result = binarySearch(myArray, myTarget);

if (result !== -1) {
  console.log(`Value ${myTarget} found at index ${result}`);
} else {
  console.log("Target not found in array.");
}
