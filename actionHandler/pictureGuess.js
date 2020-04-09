window.onload = init; // обработка события, которое должно произойти после загрузки страницы

function init(){
    var image = document.getElementById("zero");
    image.onclick = showAnswer; // обработка события, которое должно произойти если  будет нажата кнопка
}

function showAnswer(){
    var image = document.getElementById("zero");
    image.src ="zero.jpg";
}