'use strict';

const c = (arg) => {
  console.log(arg);
};

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('How many movies have you watched so far?', '').trim();

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many movies have you watched so far?', '').trim();
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};



function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let a = prompt('One of the last movies you watched?', '');
    let b = +prompt('How much do you rate it?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    c('lower');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    c('middle');
  } else if (personalMovieDB.count > 30) {
    c('hight');
  } else {
    c('error');
  }
}

detectPersonalLevel();

function showMyDB() {
  (personalMovieDB.privat == false) ? c(personalMovieDB) : c('');
}

function writeYourGenres() {
  for (let i = 0; i < 3; i++)  {
    personalMovieDB.genres[i] = prompt(`Your favorite genre №${i+1}.`)
  }
}

writeYourGenres();

c(personalMovieDB);