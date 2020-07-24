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
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;
function moviesNumber() {
    numberOfFilms  = +prompt('How many movies have you watched yet?', '');
    while(numberOfFilms == '' || !numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms  = +prompt('How many movies have you watched yet?', '');
    }
}

moviesNumber();

function viewerLevel() {
    if (numberOfFilms <= 10 && numberOfFilms > 0) {
    console.log('You have watched quite a few films');
    } else if (numberOfFilms > 10 && numberOfFilms <= 30 ) {
        console.log('You are classic viewer');
    } else if (numberOfFilms > 30) {
        console.log('You are movie fan');
    } else {
        console.log('Oops, something going wrong!');
    }
}

viewerLevel();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function lastWatchedMovies() {
    for (let i = 0; i < 2; i++) {
        let lastMovie  = prompt('One of your last watched movie', ''),
            lastMovieMark = prompt('Rate it from 0 to 10', '');
        if (lastMovie == '' || !lastMovie || lastMovie.length > 50 || lastMovieMark == '' || !lastMovieMark) {
            i--;
        } else {
            personalMovieDB.movies[lastMovie] = lastMovieMark;
        }
    }
}

lastWatchedMovies();

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        let num = i + 1;
        let favoriteGenre = prompt(`What is your favorite genre of movies number ${num}?`, '');
        if (favoriteGenre == '' || !favoriteGenre ) {
            i--;
        } else {
            personalMovieDB.genres.push(favoriteGenre);
        }
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

