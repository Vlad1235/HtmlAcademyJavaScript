window.onload = init;
function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer; // назначения обработчика при наведении курсора
        images[i].onmouseout = reblur; // назначение обработчика при отведении курсора от картинки
    }
}
/*
Обработчик заменить размытое изображение нормальным
*/
function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + ".jpg"; 
    image.src = name;
}

/*
    обработчик, чтобы снова восстановить размытое изображение
*/
function reblur(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}