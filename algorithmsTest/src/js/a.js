let i = 1;
while (i <= 4) {
  let list = [];
  let j = i;
  let z = (i * (i - 1)) / 2 + 1;
  list.push(z);
  while (j < 4) {
    z += j + 1;
    list.push(z);
    j++;
  }
  ++i;
  console.log(list.join(" "));
}