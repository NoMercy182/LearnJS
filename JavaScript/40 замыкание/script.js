'use strict';

const c = (a) => console.log(a);

// let number = 5;

// const logNumber = () => {
//   let number = 4;
//   console.log(number);
// }

// number = 6;
// logNumber();

// function fix() {
//   let a = 15;
//   let b = 20;
//   let arr = [];
//   arr.push(a, b);
//   return arr;
// }

// const arr = fix();
// const [n1, n2] = [...arr];
// console.log(n1);
// console.log(n2);

function createCounter() {
  let counter = 0;

  const myFunction = function () {
    counter = counter + 1;
    return counter;
  }

  return myFunction;
}

const incr = createCounter();
const c1 = incr();
const c2 = incr();
const c3 = incr();

c(c1);
c(c2);  
c(c3);

// console.log(true / false);

// let y = 1;
// let x = y = 2;
// console.log(x);