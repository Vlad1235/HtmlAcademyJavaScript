/*
Задача записать в прототип (для последующего повторного использования)
свойства species и 
метод bark,
методы run и wag.

Это делается для экономии памяти компьютера.
*/

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

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


var sharik = new Dog("Sharik", "Mixed", 38);
var bobik = new Dog("Bobik", "Poodle", 30);

// методы наследуются не от объекта, а от прототипа
// Данный сопособ, если мы не хотим переопределять логику в методах.
sharik.bark();
sharik.run();
sharik.wag();
bobik.bark();
bobik.run();
bobik.wag();



var tuzik = new Dog("Tuzik", "Chihuahua", 10);

// переопределение метода, который в прототипе
tuzik.bark = function(){
    console.log(this.name + " says GAF GAF!");
}
tuzik.bark(); // тут переопределенная реализация
tuzik.run(); // тут реализация от прототипа
tuzik.wag(); // тут реализация от прототипа


// добавляем новый метод в прототип и его наследуют все те, кто будет создаваться от данного типа конструктора
Dog.prototype.sit = function(){
    console.log(this.name+" is not sitting");
}

// теперь у Тузика и у других есть новый метод
tuzik.sit();
bobik.sit();