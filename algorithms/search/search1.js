/**
 * @description 顺序查找
 * @param {number[]} array
 * @param {number} value
 * @returns index
 */
function Mysearch(array, value) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === value) {
      return index;
    }
  }
  return null;
}

let a = Mysearch([5, 4, 3, 2, 1], 2);
console.log(a);
