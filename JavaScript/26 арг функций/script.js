'use strict';

const c = (a) => console.log(a);

const usdCurr = 28;
const euroCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
  return amount * curr;
}

function promotion(result) {
  c(result * discount);
}

promotion(convert(500, usdCurr));

function test() {
  for (let i = 0; i < 5; i++) {
    c(i);
    if (i === 3) {
      return
    }
  }
  c('done');
}

test();

function doNothing() { };
c(doNothing() === undefined);