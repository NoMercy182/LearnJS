'use strict';

const c = (a) => console.log(a);

let x = 5;
c(x++); // 5
c([] + false);// false (string)
c([] + false - null); // NaN 
c([] + 1 + 2); // 12
c('1'[0]); // 1
c(2 && 1 && null && 0 && undefined); // null
c(null || 2 && 3 || 4); // 3
