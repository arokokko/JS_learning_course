/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

let numberOfFilms = +prompt('How many movies have you watched yet?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let lastMovie = prompt('One of your last watched movie', ''),
    lastMovieMark = +prompt('Rate it from 0 to 10', ''),
    lastMovie1 = prompt('One of your last watched movie', ''),
    lastMovieMark1 = +prompt('Rate it from 0 to 10', '');

personalMovieDB.movies[lastMovie] = lastMovieMark;
personalMovieDB.movies[lastMovie1] = lastMovieMark1;

console.log(personalMovieDB);


