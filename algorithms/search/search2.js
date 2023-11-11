function Mysearch(array, value) {
  const sortArray = array.sort();
  let left = 0;
  let rigth = sortArray.length - 1;
  while (left < rigth) {
    const mid = Math.floor((left + rigth) / 2);
    if (sortArray[mid] === value) {
      return mid;
    } else if (sortArray[mid] > value) {
      rigth = mid - 1;
    } else if (sortArray[mid] < value) {
      left = mid + 1;
    }
  }
}

const value = Mysearch([1, 2, 3, 4, 5, 6, 7], 1);

console.log(value);
