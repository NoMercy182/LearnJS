'use strict';

const c = (arg) => {
  console.log(arg);
};

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      let a = prompt('One of the last movies you watched?', '');
      let b = +prompt('How much do you rate it?', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      c('lower');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      c('middle');
    } else if (personalMovieDB.count > 30) {
      c('hight');
    } else {
      c('error');
    }
  },
  showMyDB: () => {
    if (personalMovieDB.privat == false) {
      c(personalMovieDB);
    }
  },
  writeYourGenres: () => {
    for (let i = 0; i < 3; i++)  {
      personalMovieDB.genres[i] = prompt(`Your favorite genre №${i + 1}.`);
      if (personalMovieDB.genres[i] === null || personalMovieDB.genres[i] === '') {
        i--;
      }
    }
    personalMovieDB.genres.forEach((item, i, arr) => {
      c(`Favorite genre ${i + 1} - ${item}`);
    })
  },
  toggleVisibleMyDB: () => {
    (personalMovieDB.privat === false) ? true : false;
  },
  start: () => {
    personalMovieDB.count = +prompt('How many movies have you watched so far?', '').trim();

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('How many movies have you watched so far?', '').trim();
    }
  }
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.writeYourGenres();

c(personalMovieDB);