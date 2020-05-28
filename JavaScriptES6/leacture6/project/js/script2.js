/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const genres = document.querySelectorAll(".promo__genre");
const bgd = document.querySelectorAll(".promo__bg");
const list = document.querySelectorAll(".promo__interactive-list");

document.querySelectorAll(".promo__adv")[0].remove();
genres[0].textContent = "драма";
bgd[0].style.cssText = "background: url('img/bg.jpg') center (center / cover) no-repeat";


const myList = document.createElement("ol");
myList.classList.add("promo__interactive-list-item");

for (let i = 0; i < movieDB.movies.length; i++) {
    const myListItem = document.createElement("li");
    myListItem.classList.add("promo__interactive-item", 'delete');
    myListItem.textContent = `${i+1} ${movieDB.movies[i]}`;
    myList.append(myListItem);
}

list[0].replaceWith(myList);


