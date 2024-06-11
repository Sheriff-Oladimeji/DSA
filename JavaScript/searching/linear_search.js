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

const arr = [3, 7, 2, 9, 5];
const targetVal = 9;
const result = linearSearch(arr, targetVal);
if (result != -1) {
  console.log("Value", targetVal, "found at index", result);
} else {
  console.log("Value", targetVal, "not found");
}
