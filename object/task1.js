// Главный прародитель всех объектов (прототип Object)
function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
};
var toy = new Robot("Toy", 2013, "Avary");
console.log(toy.toString()); // обракадабра

// переопределяем метод toString()
Robot.prototype.toString = function() {
    return this.name + " Robot belonging to " + this.owner;
};
console.log(toy.toString());

/* 
Свойства Object, которые переопределять не рекомендуется:
constructor
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
*/