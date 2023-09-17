'use strict';

// const obj = new Object();

const c = (a) => console.log(a);

const options = {
  name: 'test',
  width: 1024,
  hight: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function () {
    c('Test');
  }
};



options.makeTest();


const { border, bg } = options.colors;
// c(options.name);

delete options.name;

// c(options);

for (let k in options) {
  if (typeof (options[k]) == 'object') {
    for (let i in options[k]) {
      c(`Свойство ${k} имеет значение ${i} которое имеет значение ${options[k][i]}`);
    }
  } else {
    c(`Свойство ${k} имеет значение ${options[k]}`);
  }
  
}
