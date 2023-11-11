
export const _flatten = <T> (arr:T[]):T[] =>{
  // 补全代码
  // let res = JSON.stringify(arr).replace(/\[|\]/g, "");
  // return JSON.parse(`[${res}]`);
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
/**
 * 创建一个长度为参数值并且每一项值都为参数值的数组
 * @param {*} number 
 * @returns 
 */
export const _createArray = (number: number): number[] => {
  // return new Array(number).fill(number);
  return Array.from({ length: number }, () => number);
};



/**
 * 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
 * @param {*} arr 
 */
export const duplicates = <T>(arr:T[]):T[] =>{
  const repeatArr = []
  for(let i = 0;i<arr.length;i++){
      if(arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i]) && !repeatArr.includes(arr[i])){
          repeatArr.push(arr[i])
      }
  }
  return repeatArr
}

