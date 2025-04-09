function sum(no) {
  let sum = 0;
  for (let i = 1; i <= no; i++) {
    sum += i;
  }
  return sum;
}
console.log(sum(10));
