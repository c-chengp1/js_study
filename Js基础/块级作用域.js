// try {
//     undefined(); // 执行一个非法操作来强制制造一个异常
// }
// catch (err) {
//     console.log(err); // 能够正常执行!
// }
// console.log(err); // ReferenceError: err not found

// {
//   let j;
//   for (j = 0; j < 10; j++) {
//     let i = j; // 每个迭代重新绑定!
//     console.log(i);
//   }
// }
