'use strict';

const c = (a) => console.log(a);

const sayMyName = (userName) => {
  return userName;
}

c(sayMyName('Dima'));

const retArr = (num) => {
  let arr = [num - 1, num, num + 1];
  return arr;
}

c(retArr(10));

const getMath = (a, b) => {
  if (typeof (b) !== 'number' || b <= 0) {
    return a;
  } else {
    let result = '';
    for (let i = 1; i <= b; i++) {
      result += (a * i) + '---';
    }
    return result.substring(0, result.length - 3);
  }
}

c(getMath(30, 5));