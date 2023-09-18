'use strict';

const c = (a) => {
  console.log(a);
};

let num = 20;

function showFirstMessege(text) {
  c(text);
  let num = 30;
}

showFirstMessege('greatings!');
c(num);

function calc(a, b) {
  return a + b;
}

c(calc(1, 3));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();

c(anotherNum);

let logger = function () {
  c('trello');
};

logger();

const calcArrow = (a, b) => a + b;

const C = (a) => console.log(a);