// Write a function that takes a user as an input and greets them with their name and age

let user = {
  name: 'Aditya',
  age: 13,
};

function greet(user) {
  if (user.age >= 18) {
    console.log(`hello ${user.name} , your age is ${user.age}`);
    console.log('You are Legal to vote !!!');
  } else {
    console.log(`hello ${user.name} , your age is ${user.age}`);
    console.log('You are not Legal to vote !!!');
  }
}

greet(user);
