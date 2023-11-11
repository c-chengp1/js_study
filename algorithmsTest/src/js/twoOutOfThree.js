// const set = new Set([1, 2, 3, 4, 4]);
// console.log([...set])

// const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
// console.log([...items])
// console.log(items)
// let a = [...new Set('ababbc')]
// console.log(a.join(''))

// const s = new Set()
// s.add(1).add(2).add(2);
// console.log(s.size)

// let set = new Set([1, 4, 9]);
// set.forEach((value, key) => console.log(key + ' : ' + value))

// let set = new Set(['red', 'green', 'blue']);
// console.log(set.has("red")) 


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */

const nums1 = [1,1,3,2],nums2=[2,3],nums3=[3]
var twoOutOfThree = function(nums1, nums2, nums3) {
  const setNums1 = new Set(nums1);
  console.log(setNums1)
  const setNums2 = new Set(nums2);
  console.log(setNums2)
  const setNums3 = new Set(nums3);
  console.log(setNums3)
  const res1 = [...setNums1].filter(i => setNums2.has(i));
  console.log(res1)
  const res2 = [...setNums1].filter(i => setNums3.has(i));
  console.log(res2)
  const res3 = [...setNums2].filter(i => setNums3.has(i));
  console.log(res3)
  return [...new Set([...res1, ...res2, ...res3])];
};
console.log("first",twoOutOfThree(nums1,nums2,nums3))