"use strict";

const c = (a) => {
  console.log(a);
};

// for (let i = 0; i < 3; i++) {
//   c(i);
//   for (let j = 0; j < 3; j++) {
//     c(j);
//   }
// };

// *
// **
// ***
// ****
// *****
// ******

let str = '*';

for (let i = 0; i < 6; i++) {
  c(str);
  str += '*';
}

for (let i = 0; i < 3; i++) {
  c(`First level: i = ${i}`);
  for (let j = 0; j < 3; j++) {
    c(`Second level: j = ${j}`);
    for (let k = 0; k < 3; k++) {
      c(`Third level: k = ${k}`);
    }
  }
}