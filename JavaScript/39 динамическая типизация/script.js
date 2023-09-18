'use strict';

const c = (a) => console.log(a);

c(typeof (String(null)));
c(typeof (String(4)));

c(typeof (5 + '')); // строка

const num = 5;
c('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

c(typeof (Number('4')));
c(typeof (+('40')));
c(typeof (parseInt('40px', 10)));

// let answer = +prompt('Hello', '');

let arrFallse = [0, '', null, undefined, NaN]; // False

let switcher = 1;

if (switcher) {
  c('Working...');
}

c(typeof(Boolean('4')))
c(typeof(!!('4')))