'use strict';

const c = (a) => {
  console.log(a);
};

function firstTask() {
  for (let i = 5; i <= 10; i++) {
    c(i);
  }
}

// firstTask();

function secondTask() {
  let num = 20;
  for (let i = 0; i < 10; i++) {
    c(num);
    num--;
    if (num === 13) {
      break;
    };
  };
};

// secondTask();

// function thirdTask() {
//   for (let i = 2; i <= 10; i += 2) {
//     c(i);
//   }
// }

function thirdTask() {
  for (let i = 1; i <= 10; i += 1) {
    if (i % 2 === 0) {
      c(i);
    }
  }
}

// thirdTask()

function fourthTask() {
  let num = 3;
  while (num <= 16) {
    c(num);
    num += 2;
  }
}

// fourthTask()

function fivethTask() {
  let arr = [];
  let num = 5;
  for (let i = 0; i <= 5; i += 1) {
    arr[i] = num;
    num++;
  }
  c(arr);
}

// fivethTask();

function Task6() {
  let arr = [1, 2, 3, 4, 5, 10, 25];
  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result[i] = arr[i];
  }
  c(result);
}

// Task6();

function Task7() {
  let arr = [5, 10, 'Shopping', 20, 'Homework'];

  for (let i = 0; i < arr.length; i += 1) {
    (typeof (arr[i]) == 'number') ? arr[i] = arr[i] * 2 : arr[i] += ' - done';
  }
  
  c(arr);
}

// Task7();

function Task8() {
  let data = [5, 10, 'Shopping', 20, 'Homework'];
  let result = [];
  let num = data.length - 1;

  for (let i = 0; i < data.length; i++) {
    result[i] = data[num];
    num--;
  }
  c(result);
}

Task8();