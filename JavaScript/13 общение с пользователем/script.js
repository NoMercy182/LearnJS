'use strict';

// alert('hello');
const c = (a) => {
  console.log(a);
};

const t = (a) => {
  return typeof (a);
};

const result = confirm('Are you here?');
c(result);

const answer = prompt('Вам есть 18?', '');
c(answer);

const answers = [];

answers[0] = prompt('whats your name?', '');
answers[1] = prompt('whats your surname?', '');
answers[2] = prompt('whats your age?', '');
c(answers);
c(t(answers));