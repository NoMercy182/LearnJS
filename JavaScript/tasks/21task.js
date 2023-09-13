'use strict';

const c = (a) => {
  console.log(a);
};

c(NaN || 2 || undefined); // 2
c(NaN && 2 && undefined); // NaN
c(1 && 2 && 3); // 3
c(!1 && 2 || 3); // false && 2 || 3 => 3
c(25 || null && !3); // 25
c(NaN || null || !3 || undefined || 5); // 5
c(NaN || null && !3 && undefined || 5); // 5
c(5 === 5 && 3 > 1 || 5); // true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// (hamburger === 3 && cola || fries === 3 && nuggets) ? c('done') : c('error'); // done

// let hamburger;

// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// (hamburger || cola || fries === 3 || nuggets) ? c('done') : c(' error'); // done

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

(hamburger && cola || fries === 3 && nuggets) ? c('done') : c('error'); // error





