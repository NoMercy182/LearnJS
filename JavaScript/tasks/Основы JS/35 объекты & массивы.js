'use strict';

const c = (a) => console.log(a);

const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
        js: '20%',
        php: '10%'  
      },
      exp: '1 month'
  },
  showAgeAndLangs: (obj) => {
    c(`Мне ${obj.age} и я владею языками: ${obj.skills.languages.join(', ').toUpperCase()}`)
  }
};

function showExperience(plan) {
  c(plan.skills.exp);
}

// showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
  if (Object.keys(plan.skills.programmingLangs).length === 0) {
    return '';
  } else {
    for (let k in plan.skills.programmingLangs) {
      c(`Язык ${k} изучен на ${plan.skills.programmingLangs[k]}`)
    }
  }
}

// showProgrammingLangs(personalPlanPeter);

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
  if (arr.length === 0) {
      c('Семья пуста')
  } else {
      c(`Семья состоит из: ${arr.join(', ')}`)
    }
}

// showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
  for (let v of arr) {
    c(v.toLowerCase());
    }
}

// standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
  let arr = str.split('');
  let newArr = [];
  for (let v of arr) {
    newArr.unshift(v);
  }
  c(newArr.join(''));
}

// reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const newArr = [...baseCurrencies, ...additionalCurrencies]

function availableCurr(arr, missingCurr) {
  let newArr = [];
  if (arr.length === 0) {
    c('Нет доступных валют')
  } 
  for (let v of arr) {
    if (v != missingCurr) {
      newArr.push(v);
    }
  }
  c(`Доступные валюты:${'\n'}${newArr.join('\n')}`)
}

availableCurr(newArr, 'USD');