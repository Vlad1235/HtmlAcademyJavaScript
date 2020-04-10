/*
Можно использовать несколько прототипов (один прототип наследуется от другого)

Концепция цепочки прототипов
*/

// конструктор (главный прототип для просто собак будет создан на его основе)
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
};
// создаем прототип для собак в принципе и заполняем его методами и свойствами.
Dog.prototype.species = "Canine";
Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Tyaf!");
    }
};
Dog.prototype.run = function() {
    console.log("Run!");
};
Dog.prototype.wag = function() {
    console.log("Wag!");
};


// конструктор прототипа(выставочных собак)
function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight); // вызываем конструктор прототипа Dog и ему передаем на обработку. Можно так не делать. Лишь для красоты кода
    this.handler = handler;
};

/*
у нас имеется конструктор ShowDog, который может использоваться для создания экземпляров выставочных собак, и 
прототип выставочной собаки, который представляет собой экземпляр собаки.
*/
ShowDog.prototype = new Dog(); // тут и есть связывание прототипов!
/*
Далее заполняем прототип выставочных собак данными и логикой
*/
Showdog.prototype.league = "Webville";
ShowDog.prototype.stack = function() {
    console.log("Stack");
};
ShowDog.prototype.bait = function() {
    console.log("Bait");
};
ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function() {
    console.log("Groom");
};

/*
Осталось сделать последний шаг: создать экземпляр ShowDog. Этот экзем-
пляр будет наследовать свойства и методы выставочной собаки от прототипа
выставочной собаки, а поскольку прототип выставочной собаки является
экземпляром Dog, выставочная собака унаследует все основное собачье поведение и свойства
от прототипа, поэтому она сможет лаять, бегать и махать хвостом вместе с остальными собаками.
*/

var fido = new Dog("Fido", "Mixed", 38);
var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");


if (fido instanceof Dog) {
    console.log("Fido is a Dog");
};
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
};

if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
};
if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
};
