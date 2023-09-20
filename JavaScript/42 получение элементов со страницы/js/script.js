'use strict';

const c = (a) => console.log(a);

const box = document.getElementById('box');

c(box);
// box.hidden = true;

const buttons = document.getElementsByTagName('button'); // htmlCollection
// это псевдомассив без форыча
const btn = document.getElementsByTagName('button')[1];

for (let v of buttons) {
  c(v);
}

c(buttons);
c(btn);
// c(typeof (buttons));

const circles = document.getElementsByClassName('circle');
c(circles);

const hearts = document.querySelectorAll('.heart'); // nodeList
// это псевдомассив с форычем
c(hearts);

for (let v of hearts) {
  c(v);
}

hearts.forEach(item => {
  c(item);
});

const oneHeart = document.querySelector('.heart'); // находит первый елемент
c(oneHeart);
