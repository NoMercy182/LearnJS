'use strict'

const c = (a) => console.log(a);

const obj = {
  colorRed: 'red',
  colorBlack: 'black',
  values: {
    width: 1000,
    height: 400
  }
}

const copyingObj = (obj) => {
  const coppy = {};

  for (let key in obj) {
    coppy[key] = obj[key];
  }

  return coppy;
}

c(copyingObj(obj));