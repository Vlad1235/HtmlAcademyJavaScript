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

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?"); // чтобы число возвращалось то ставить +
let watchedMovie1 = prompt("Один из последних просмотренных фильмов");
let yourRating1 = prompt("На сколько его оцените?");
let watchedMovie2 = prompt("Один из последних просмотренных фильмов");
let yourRating2 = prompt("На сколько его оцените?");

console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        watchedMovie1:yourRating1,
        watchedMovie2:yourRating2
    },
    actors: {},
    genres: [],
    privat: false
};
console.log(personalMovieDB);
