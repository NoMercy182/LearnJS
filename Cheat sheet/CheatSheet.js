'use strict';

// Тернарный оператор ----------------------------------------

const number = 50;

(number === 50) ? console.log('Yes') : console.log('no');

// Switch Case ----------------------------------------

const switchNumber = 50;

switch (switchNumber) {
  case 25:
    console.log(`no`);
    break;
  case 35:
    console.log(`no`);
    break;
  case 50:
    console.log(`Yes`);
    break;
  default:
    console.log(`error`);
}

// Логические операторы --------------------------------------------------------------

const hamburger = 3;
const fries = 0;
const cola = 2;

console.log(hamburger && fries && cola);

console.log(1 && 0); // 0
console.log(1 && 5); // 5
console.log(null && 5); // null
console.log(0 && 'dffdf'); // 0
console.log(null && ''); // null

// оператор && возвращает первое ложное значение, ну а если все прадивы - тогда последнее правдивое.

console.log(1 || 0); // 1
console.log(1 || 5); // 1
console.log(null || 5); // 5
console.log(0 || 'dffdf'); // 'dffdf' 
console.log(null || ''); // ''

// оператор || возвращает первое правдивое значение, Ну а если все непрадивы - тогда последнее ложное.

// 5 сущностей FALSE в js:

const arrFalse = [0, '', null, undefined, NaN];

// Cicles --------------------------------------------------------------

first: for (let i = 0; i < 3; i++) {
  console.log(`First level, this is i = ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level, this is j = ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 1) {
        continue first;
      }
      console.log(`Third level, this is k = ${k}`);
    }
  }
}

// Functions --------------------------------------------------------------

function funcDec() {
  console.log('funcDec');
}

funcDec();

const funcExp = function () {
  console.log('funcExp');
};

funcExp();

const funcArroy = () => {
  console.log('funcArroy');
};

funcArroy();

const convert = (amount, curr) => {
  return (amount * curr);
};

const USD_CURR = 2.5;
const EURO_CURR = 2.9;

const convertUSD = convert(500, USD_CURR);
const convertEURO = convert(500, EURO_CURR);

console.log(convertUSD);
console.log(convertEURO);

function test() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
    if (i === 3) {
      return;
    }
    console.log('done');
  }
}

function doNothing() { }
console.log(doNothing() === undefined);

// Методы и свойства строк и чисел --------------------------------------

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String
// методы строк

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Number
// методы чисел

// console.dir(Number); можно потестить в браузере

const testStr = 'test';
const testStr2 = 'MERCY';

const newTestStr = testStr.toUpperCase(); // Верхний регистр
console.log(newTestStr);

const newTestStr2 = testStr2.toLowerCase(); // Нижний регистр
console.log(newTestStr2);

const fruit = "Some fruit";
console.log(fruit.indexOf('fruit')); // Поиск подстроки

let testMessage = 'No Mercy';
console.log(testMessage.slice(3)); // вырезаем часть строки с 3 позиции и до конца
console.log(testMessage.slice(3, 4)); // вырезаем часть строки с 3 позиции и до 4
console.log(testMessage.slice(-5)); // вырезаем часть строки c конца

console.log(testMessage.substring(3)); // тоже самое но не поддерживает отрицательных значений
console.log(testMessage.substr(3, 1)); // c 3 индекса и второй аргумент колво символов
// Numbers ---------------------------------------------------

let testNum = 12.9;

console.log(Math.round(testNum)); // Округляем число до целого по правилам математики
console.log(Math.floor(testNum)); // Округляем число до целого отбрасывая дробную часть

let testNumInStr = "12.2px";
console.log(parseInt(testNumInStr)); // Выводит целое число из строки 
console.log(parseFloat(testNumInStr)); // Выводит дробь из строки


// Calback --------------------------------------------------------------------

function learnJS(lang, callback) {
  console.log(`I am learn: ${lang}`);
  callback();
}

learnJS('JS', () => console.log('111'));

const funcDone = () => {
  console.log(222);
};

learnJS('Js', funcDone);

// Алгоритмы -------------------------------------------------------------

// https://web.archive.org/web/20221025084508/http://mathhelpplanet.com/static.php?p=javascript-algoritmy-poiska

// Объекты ---------------------------------------------------------------

// Методы перебора объектов

// for in — цикл по объекту. Можно получить и ключ и значение.
// Object.entries() — метод, возвращающий массив пар [key, value]
// Object.keys() — метод, который возвращает массив ключей [key1, key2]
// Object.values() — метод, который возвращает массив значений [value1, value2]

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object

// Массивы ---------------------------------------------------------------

const testArray = [1, 2, 3, 6, 8];

testArray.pop(); // удаляет элемент в конце массива
testArray.push(10); // добавляет элемент в конец массива

for (let i = 0; i < testArray.length; i += 1) {
  console.log(testArray[i]);
}

for (let value of testArray) {
  console.log(value);
}

const testArray2 = [1, 2, 3, 6, 8, 10];

testArray2.forEach(function(item, i, arr) {       // for.Each
  console.log(`${i}: ${item} in array ${arr}`);
});

// testArr.shift();           // удаляет первый элемент
// testArr.unshift();         // добавляет элемент в начало массива
// testArr.split(',');        // превращает строку в массив
// testArr.join(' ');         // превращает массив в строку
// delete testArr[1];         // удаляет второй элемент
// testArr.splice(0, 5, 4);   // удалить 5 элементов с индекса ноль и добавить число 4
// testArr.slice(0, 5);       // копирует часть массива с индекса 0 до 5 не включая
// testArr.sort();            // сорт массива, если не передать fn - сорт элементы как строки
// testArr.reverse();         // меняет порядок элементов на обратный
// testArr.concat(3);         // создает нью массив в который все копирует и добав нью элемент

let testArr = [14, 32, 65, 97, 0, 23, 44, 82];

let sortTestArr = testArr.sort(compareNum); // отсортировали и засунули в нью массив

function compareNum(a, b) {   // функция сортировки чисел
  return a - b;
}

console.log(testArr);
console.log(sortTestArr);

// Динамическая типизация JS -------------------------------------------------------

// to boolean

// 0, '', null, undefined, NaN; - false

// let switcher = null;

// if (switcher) {
//   console.log('Working...');
// }

// console.log(typeof(!!"444")); преобразуем в bool


