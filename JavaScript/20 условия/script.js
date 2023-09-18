'use strict';

if (4 == 9) {
  console.log('Ok');
} else {
  console.log('error');
}

const num = 50;

if (num < 49) {
  console.log('error');
} else if (num > 100) {
  console.log('to many');
} else {
  console.log('ok');
}

(num === 50) ? console.log('okk') : console.log('error');

const c = (a) => {
  console.log(a);
};

let number = 500;

(number === 505) ? c(`number = ${number}`) : number++, c(number);

switch (number) {
  case 499:
    c('no');
    break;
  case 100:
    c('no');
    break;
  case 501:
    c('ok');
    break;
  default:
    c('not yet');
    break;
}
