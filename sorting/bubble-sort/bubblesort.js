let my_array = [64, 34, 25, 12, 22, 11, 90, 5];
const len = my_array.length;

for (let i = 0; i < len - 1; i++) {
  for (let j = 0; j < len - i - 1; j++) {
    if (my_array[j] > my_array[j + 1]) {
      // Swap elements
      let temp = my_array[j];
      my_array[j] = my_array[j + 1];
      my_array[j + 1] = temp;
    }
  }
}

console.log("Sorted array:", my_array);
