'use strict';

const c = (a) => console.log(a);

const shoppingMallData = {
  shops: [
      {
          width: 10,
          length: 5
      },
      {
          width: 15,
          length: 7
      },
      {
          width: 20,
          length: 5
      },
      {
          width: 8,
          length: 10
      }
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000
}

function isBudgetEnough(data) {
  let moneyNeed = 0;
  let volume = 0;
  let area = 0;
  for (let obj of data.shops) {
    for (let k in obj) {
      area += obj.width * obj.length;
    }
  }
  volume = area * data.height;
  moneyNeed = volume * data.moneyPer1m3;
    (moneyNeed <= data.budget) ? c('Бюджета достаточно') : c('Бюджета не достаточно');
}

isBudgetEnough(shoppingMallData);

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let garbage = [];
  arr = arr.sort();
  
  arr.forEach((item, i) => {
    if (i < 3) {
      arr1.push(item);
    } else if (i < 6) {
      arr2.push(item);
    } else if (i < 9) {
      arr3.push(item);
    } else {
      garbage.push(item);
    }
  });
    

  let newArr = [];
  let str = '';
  if (garbage.length === 0) {
    str = 'Оставшиеся студенты: -';
  } else {
    str = `Оставшиеся студенты: ${garbage.join(', ')}`;
  }
  c(newArr = [arr1, arr2, arr3, str]);
}

sortStudentsByGroups(students);