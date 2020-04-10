/*
    Примеры объявления функций
*/

function quack(num) {
    for (var i = 0; i < num; i++) {
    console.log("Quack!");
    }
};
var fly = function(num) {
    for (var i = 0; i < num; i++) {
    console.log("Flying!");
    }
};

var superFly = fly;
superFly(2);

var superQuack = quack;
superQuack(3);

var winner = function() { alert("WINNER!") };
var loser = function() { alert("LOSER!") };

// Простой тест
winner();
// Присваивание ссылок переменным
var a = winner;
var b = loser;
var c = loser;
a();
b();
// присываивание ссылок ссылкам
c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;
a();
с();