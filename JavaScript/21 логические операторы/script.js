'use strict';

const c = (a) => {
  console.log(a);
}

const hamburger = 3;
const fries = 1;
const cola = 0;

c(hamburger === 3 && cola && fries);

if ((hamburger === 3) && (cola === 1) && (fries)) {
  c('We eat');
} else {
  c('We run')
}

