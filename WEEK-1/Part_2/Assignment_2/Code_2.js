function sum(a, b) {
  return a + b;
}

console.log(sum('1', '3')); // 13 // concatenation
console.log(sum(1, 3));

// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
  return age >= 18 ? true : false;
}

console.log(canVote(14));
