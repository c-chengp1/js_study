/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// const merge = function (nums1, m, nums2, n) {
//   const array1 = nums1.slice(0, m);
//   console.log(array1);
//   const array2 = nums2.slice(0, n);
//   console.log(array2);
//   const array = [...array1, ...array2].sort((a, b) => a - b);
//   console.log(array);
//   return array;
// };
var merge = function (nums1, m, nums2, n) {
  let p1 = 0,
    p2 = 0;
  const sorted = new Array(m + n).fill(0);
  let cur;
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++];
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++];
    } else {
      cur = nums2[p2++];
    }
    sorted[p1 + p2 - 1] = cur;
  }
  for (let i = 0; i != m + n; ++i) {
    nums1[i] = sorted[i];
  }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
