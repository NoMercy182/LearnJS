'use strict';

const c = (arg) => {
  console.log(arg);
};

const numberOfFilms = +prompt('How many movies have you watched so far?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt('One of the last movies you watched?', '');
  let b = +prompt('How much do you rate it?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10) {
  c('lower');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  c('middle');
} else if (personalMovieDB.count > 30) {
  c('hight');
}

c(personalMovieDB);