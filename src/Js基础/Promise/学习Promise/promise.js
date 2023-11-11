
// function Promise(executor){
//   this.PromiseState = "pending";
//   this.PromiseResult = null;
//   this.callbacks= [];
//   const self = this;
//   //(a) 如果成功，调用resolve函数，并将PromiseState结果改为fullfilled
//   function resolve(data){
//     //(1) 判断：如果之前的PromiseState不是pending，表示PromiseState的状态已经发生过改变，则不执行以下语句
//     if(self.PromiseState !== "pending")return;
//     // (2)
//     self.PromiseState = "fullfilled";
//     self.PromiseResult = data;
//     self.callbacks.forEach(item => {
//       item.onResolved(data)
//     }); 
//   }
//   //(b) 如果失败，调用reject函数，并将PromiseState结果改为rejected
//   function reject(data){
//     //(1) 判断：如果之前的PromiseState不是pending，表示PromiseState的状态已经发生过改变，则不执行以下语句
//     if(self.PromiseState !== "pending")return;
//     //(2)  
//     self.PromiseState = "rejected";
//     self.PromiseResult = data;
//     self.callbacks.forEach(item => {
//       item.onRejected(data) 
//     }); 
//   }
//   // (c)如果抛出异常，进行异常处理
//   try {
//     executor(resolve,reject);
//   } catch (error) {
//     reject(error)
//   }
// }
// Promise.prototype.then = function (onResolved,onRejected) {
//   return new Promise((resovle,reject)=>{
//     // 成功的结果
//     if (this.PromiseState==="fullfilled"){
//       // 获取回调函数的执行结果
//       try {
//         let result = onResolved(this.PromiseResult)
//         // 如果执行结果是Promise对象
//         if(result instanceof Promise){
//           result.then(
//             v=>{
//               resovle(v);
//             },
//             r=>{
//               reject(r) //如果
//             }
//           )
//         }else{ //如果不是promise对象，则为成功结果
//           resovle(result)
//         }
//       } catch (error) {
//         reject(error)
//       }
  
//     }

//     if (this.PromiseState==="rejected"){
//       // let result = onRejected(this.PromiseResult)

//     }

//     if (this.PromiseState === "pending"){
//       this.callbacks.push({
//         onResolved:function () {
//           console.log("success")
//         },
//         onRejected:function () {
//           console.log("error")
//         },
//       })
//     }
//   })
// }