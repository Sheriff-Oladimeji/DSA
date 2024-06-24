const linearSearch = (arr, targetVal) => {
  // loops through the array
  for (let x in arr) {
    // checks for a match
    if (arr[x] === targetVal) {
      return arr.indexOf(arr[x]);
    }
  }
  // if no match is found
  return -1;
};

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetVal = 7;
const result = linearSearch(arr, targetVal);
if (result != -1) {
  console.log("Value", targetVal, "found at index", result);
} else {
  console.log("Value", targetVal, "not found");
}
