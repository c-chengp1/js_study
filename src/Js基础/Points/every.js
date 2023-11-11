function isNumber(value) {
  return typeof value === "number";
}

const isTruth = () => true;
const isFalsy = () => false;
const a = [1].every(isNumber);

const b = ["1"].every(isNumber);
const c = [1, 2, 3].every(isNumber);
const d = [1, "2", 3].every(isNumber);
const f = [].every(isNumber);
const g = [].every(isTruth);
const h = [].every(isFalsy);

// Array.prototype.every = function (callbackfn, thisArg) {
//   const O = this;
//   const len = O.length;

//   if (typeof callbackfn !== "function") {
//     throw new TypeError("Callback isn't callable");
//   }

//   let k = 0;

//   while (k < len) {
//     const Pk = String(k);
//     const kPresent = O.hasOwnProperty(Pk);

//     if (kPresent) {
//       const kValue = O[Pk];
//       const testResult = Boolean(callbackfn.call(thisArg, kValue, k, O));

//       if (testResult === false) {
//         return false;
//       }
//     }

//     k = k + 1;
//   }

//   return true;
// };

const i = [1].every(isFalsy);
