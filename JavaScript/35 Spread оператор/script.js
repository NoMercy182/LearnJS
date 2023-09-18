'use strict';

const c = (a) => console.log(a);

// let a = 5;
// let b = a;

// b = b + 5;

// c(b);
// c(a);

// const obj = {
//   a: 5,
//   b: 1
// }

// const copy = obj;

// copy.a = 10;

// c(copy);
// c(obj);

function copy(mainObj) {
  let objCopy = {};

  let k;
  for (k in mainObj) {
    objCopy[k] = mainObj[k];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
}

const newNumbers = copy(numbers);

newNumbers.a = 10;

c(numbers)

const add = {
  d: 17,
  e: 20
};

c(Object.assign(numbers, add));
const clone = Object.assign({}, add);

const oldArr = ['a', 'b', 'c', [1, 2]];
const newArr = oldArr.slice();

newArr[3][0] = 33;
c(oldArr);

const video = ['youtube', 'vimeo', 'rutube'];
const blogs = ['wordpress', 'livejournal', 'blogger'];
const internet = [...video, ...blogs, 'vk', 'facebook'];

c(internet)

function loh(a, b, s) {
  c(a);
  c(b);
  c(s);
}

const num = [44, 5, 7,];
loh(...num);

const array = ['a', 'b'];

const testArray = [...array];

const q = {
  one: 1,
  two: 2,
  f: {
    d: 10
  }
}

const newQ = { ...q };
newQ.f.d = 20;

c(q);


