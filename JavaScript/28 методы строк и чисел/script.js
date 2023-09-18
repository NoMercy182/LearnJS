'use strict';

let str = 'test';
const arr = [1, 2, 4];

str = str.toUpperCase();
console.log(str);

function c(arg) {
  console.log(arg);
}


function test(arg, callback) {
  setTimeout(() => {
    console.log(arg);
  }, 2500);
  callback;
}

test('hui', c('ddd'));