'use strict';

const c = (a) => console.log(a);

const arr = [1, 2, 3, 6, 8,234, 10, 4];

function cNum(a, b) {
  return a - b;
}

c(arr.sort(cNum));



arr.pop();
arr.push(10);


for (let i = 0; i < arr.length; i++) {
  c(arr[i]);
}

for (let v of arr) {
  c(v);
}

arr.forEach(function (item, i, arr) {
  // c(`индекс ${i}: значение ${item} внутри массива ${arr}`);
  arr[i] = item * 2;
});

c(arr)

let str = 'NoMercy';
let buks = str.split('');
c(buks);


