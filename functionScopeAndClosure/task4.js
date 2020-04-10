window.onload = function() {                            // обработчик события дейстий после загрузки страницы
    var count = 0;
    var message = "You clicked me ";
    var button = document.getElementById("clickme");
    var div = document.getElementById("message");
    
    button.onclick = function() {                       // обработчик события клика по кнопке
    count++;
    div.innerHTML = message + count + " times!";
    };
};
/*
Функция содержит три свободные переменные: div, message и count, поэтому для
 функции-обработчика click создается замыкание.
 Таким образом, свойству onclick кнопки назначается замыкание.
*/


/*
Старый вариант без замыкания
var count = 0; // глобальная переменная

window.onload = function() {
    var button = document.getElementById("clickme");
    button.onclick = handleClick;
};

function handleClick() {
    var message = "You clicked me ";
    var div = document.getElementById("message");
    count++;
    div.innerHTML = message + count + " times!";
};

*/