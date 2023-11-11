function MySort(arr) {
  // write code here
  let num = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        num++;
      }
    }
  }
  return arr;
}

MySort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
