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

const a = prompt('One of the last movies you watched?', '');
const b = +prompt('How much do you rate it?', '');
const s = prompt('One of the last movies you watched?', '');
const d = +prompt('How much do you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[s] = d;
c(personalMovieDB);