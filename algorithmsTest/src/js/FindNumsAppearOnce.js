/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param nums int整型一维数组
 * @return int整型一维数组
 */
function FindNumsAppearOnce(nums) {
  // write code here
  let map = new Map();
  for (const key of nums) {
    map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1);
  }
  const res = [...map].filter((value, key) => {
    return value[1] == 1;
  });
  return res.map((value) => value[0]).sort();
}

let res = FindNumsAppearOnce([1, 2, 2, 1, 3, 4]);
console.log(res);
export { FindNumsAppearOnce as FindNumsAppearOnce };
