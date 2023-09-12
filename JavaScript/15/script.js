'use strict';

const c = (arg) => {
  console.log(arg);
};

c('arr' + ' - object');
c(5 + ' - object');
c(5 * ' - object');

let incr = 10;
let decr = 10;

incr++; // посимвольно
decr--;

c(incr);
c(decr);
c(5 % 2);
// c(2 * 4 == '8');
// c(2 * 4 === '8');

const isChecked = true;
const isClose = true;
c(isChecked && isClose);
c(isChecked || isClose);
c(isChecked || !isClose);
c(2 + 2 * 2 !== "6")