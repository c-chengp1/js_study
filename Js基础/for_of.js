const array1 = ["a", "b", "c"];

array1.name = "nihao";
/**
 *可迭代对象
 */
for (const element of array1) {
  console.log(element);
}
