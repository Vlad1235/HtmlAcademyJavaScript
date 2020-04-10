/*
Пример использования замыкания, чтобы не использовать глобальной переменной
Функция счетчик
*/
function makeCounter() {
    var count = 0; // локальная переменная нахдится в одном окружении с функцией counter() и вернется вместе с ней
        function counter() {
            count = count + 1;
        return count;
        }
    return counter;
}
/* 
Мы вызываем функцию makeCounter, которая создает функцию counter и возвращает ее вместе с окружением, содержащим свободную переменную count. 
Другими словами, она создает замыкание
*/
var doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());