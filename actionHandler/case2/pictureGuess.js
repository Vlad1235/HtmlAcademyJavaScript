window.onload = init;
function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;
    var name = image.id;
    name = name + ".jpg"; // так как нормальная фотография называется также как id, но без разрширения .jpg
    image.src = name;
    window.setTimeout(reblur, 2000, image); // таймер 2 сек, который запустит обработчик события
}

/*
    обработчик, чтобы снова восстановить размытое изображение
*/
function reblur(image) {
    var name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}