/**
 * @param {*} arr
 * @returns 将多维数组转为一维数组
 */
export const _flatten = (arr) => {
  // let res = JSON.stringify(arr).replace(/\[|\]/g, "");
  // return JSON.parse(`[${res}]`);
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
};
/**
 * 创建一个长度为参数值并且每一项值都为参数值的数组
 * @param {number} number
 * @returns
 */
export const _createArrayByNumber = (number) => {
  // return new Array(number).fill(number);
  return Array.from({ length: number }, () => number);
};
/**
 * 创建一个长度为0 ~ length-1的数组
 * @param {number} length
 * @returns
 */
export const _createArrayByIndex = (length) => {
  return Array.from({ length }, (v, k) => k);
};
/**
 * 找出数组 arr 中重复出现过的元素（不用考虑返回顺序）
 * @param {*} arr
 */
export const duplicates = (arr) => {
  const repeatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i]) &&
      !repeatArr.includes(arr[i])
    ) {
      repeatArr.push(arr[i]);
    }
  }
  return repeatArr;
};
/**
 *  输入一个正整数数组，把数组里所有的数字拼接成一个数字，打印出最小的结果
 * (比如输入 [12,41,11]，输出 111241;输入[6,11,30]，输出11306）
 * @param {*} arr
 * @returns
 */
export const toMinNums = (arr) => {
  arr.sort();
  if (arr[0] == 0) {
    arr.shift();
  }
  let str = arr.join("");
  return str;
};
/**
 * 返回3x3x3矩阵
 * @returns
 */
export const _logmatrix3x3x3 = () => {
  const matrix3x3x3 = [];
  for (let i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (let j = 0; j < 3; j++) {
      matrix3x3x3[i][j] = [];
      for (let k = 0; k < 3; k++) {
        matrix3x3x3[i][j][k] = i + j + k;
      }
    }
  }
  return matrix3x3x3;
};
/**
 * @description 给定一个长度为 n 的非降序数组和一个非负数整数 k ，要求统计 k 在数组中出现的次数
 * @param {number[]} data 升序数组
 * @param {number} k 数组元素
 * @returns k出现次数
 */
export const GetNumberOfK = (data, k) => {
  // write code here
  let left = 0;
  let right = data.length;
  //二分左右界
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (data[mid] >= k) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  let start = left;
  left = 0;
  right = data.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (data[mid] <= k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let end = right;
  return end - start;
};
/**
 * @description 在旋转过的有序数组中寻找目标值
 * @param {number[]} arr 有序数组
 * @param {number} target 目标值
 * @returns
 */
export const binarySearch_rotated = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start <= end) {
    mid = (start + end) >>> 1;
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[start] <= arr[mid]) {
      // 说明左半部分是有序的
      if (arr[start] <= target && target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      // 说明右半部分是有序的
      if (arr[mid] < target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};
/**
 * 点击消除
 * @param {string} str 一个字符串，仅由小写字母组成。
 * @returns 一个字符串，为“点击消除”后的最终形态
 */
export const clickClearUp = (str) => {
  let stack = [];
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    const stackTop = stack[stack.length - 1];
    if (element === stackTop) {
      stack.pop();
    } else {
      stack.push(element);
    }
  }
  if (stack.length == 0) {
    console.log("0");
  } else {
    console.log(stack.join(""));
  }
};
/**
 * @description 合并两个有序数组
 * @param {number[]} A 有序数组A
 * @param {*number[]} B 有序数组B
 * @returns {number[]}
 */
export const merge = (A, B) => {
  // write code here
  let result = [];
  let i = 0,
    j = 0;
  const m = A.length,
    n = B.length;
  while (i < m && j < n) {
    if (A[i] < B[j]) {
      result.push(A[i++]);
    } else {
      result.push(B[j++]);
    }
  }

  while (i < m) {
    result.push(A[i++]);
  }

  while (j < n) {
    result.push(B[j++]);
  }

  return result;
};

export const removeWithoutCopy = (arr, item) => {
  while (arr.indexOf(item) != -1) {
    arr.splice(arr.indexOf(item), 1);
  }

  return arr;
};

export const evalRPN = (rpnExpression) => {
  let stack = [];
  let operation = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => parseInt(x / y),
  };
  rpnExpression.forEach((element) => {
    if (element in operation) {
      let y = stack.pop();
      let x = stack.pop();
      let result = operation[element](x, y);
      stack.push(result);
    } else {
      stack.push(parseInt(element));
    }
  });
  return stack.pop();
};

let a = evalRPN(["1", "2", "+", "3", "*"]);
console.log(a);
