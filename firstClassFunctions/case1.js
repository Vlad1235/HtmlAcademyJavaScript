/*
 В функицю передаем функцию

 Исполнение концепции в языке JavaScript  - функция как значение
*/

function sayIt(translator) {
    var phrase = translator("Hello");
    alert(phrase);
}
function hawaiianTranslator(word) {
    if (word === "Hello") return "Aloha";
    if (word === "Goodbye") return "Asta manana";
}

sayIt(hawaiianTranslator);