'use strict';

const c = (a) => {
  console.log(a);
};

let num = 50;

// while (num < 55) {
//   c(num);
//   num++;
// }

// do {
//   c(num);
//   num++;
// }
// while (num < 55);

for (let i = 1; i < 8; i++) {
  if (i === 6) {
    // break;
    continue;
  }
  c(i);
}