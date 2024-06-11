const linearSearch = (arr, targetVal) => {
    for (let x in arr) {
        if (arr[x] === targetVal){
          return arr.indexOf(arr[x])
      }
  }
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
