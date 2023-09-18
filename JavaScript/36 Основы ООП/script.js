'use strict';

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof (str));
// console.log(typeof (strObj));

// console.dir([1, 2, 3]);

// console.dir(String)

// const arrow = () => { }

const soldier = {
  health: 400,
  armor: 100,
  sayHello: () => {
    console.log('Hello')
  }
}

const John = Object.create(soldier);
John.health = 100;

// const John = {
//   health: 100
// }

// John.__proto__ = soldier;

// console.log(John);
// console.log(John.armor);
// John.sayHello();

// Object.setPrototypeOf(John, soldier);

// console.log(John);
console.log(Object.keys(John));

// for (let k in John) {
//   console.log(k);
// }

// console.log(John.armor);