// let arr = [1, 2, 3, 4, 5, 6, 7];
// let deleteNumArr = [];
// function deleteArr(arr) {
//   let len = arr.length;

//   if (len > 2) {
//     let n = 0;
//     if (arr[n] + arr[n + 1] === arr[n + 2]) {
//       let num = arr.splice(n + 1, 1);
//       deleteNumArr.push(...num);
//       deleteArr(arr);
//     } else {
//       arr.splice(n, 1);
//       deleteArr(arr);
//     }
//   } else {
//     console.log(deleteNumArr);
//   }
// }

// deleteArr(arr);

const arr = [
  { id: 1, value: "value1", date: "2018-08-08", time: "15:27:17" },
  { id: 2, value: "value2", date: "2018-08-09", time: "12:27:17" },
  { id: 3, value: "value3", date: "2018-08-10", time: "17:27:17" },
  { id: 4, value: "value4", date: "2018-08-10", time: "01:27:17" },
  { id: 5, value: "value5", date: "2018-08-10", time: "09:27:17" },
  { id: 6, value: "value6", date: "2018-08-10", time: "23:27:17" },
  { id: 7, value: "value7", date: "2018-08-10", time: "16:27:17" },
  { id: 8, value: "value8", date: "2018-08-11", time: "10:27:17" },
];
arr.sort(
  (a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time)
);
console.log(arr);
