function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
    if (this.weight > 25) {
        alert(this.name + " says Woof!");
        } else {
        alert(this.name + " says Yip!");
        }
    };
}

/*
    Однако добавление удаление изменение будет работать лишь с объектом ШАРИК!
    И даже если мы удалим все свойства собаки, попрежнему данный объект шарик будет считаться собакой. 
    Это JavaScript)
*/
var sharik = new Dog("Sharik", "Mixed", 38);
// добавляем новые свойства. Хозяина и метод доверять
sharik.owner = "Ivan";
sharik.trust = function(person){
    return person==="Ivan";
}
sharik.bite = true;

// изменяем свойства
sharik.breed = "fighter";

// удаляем свойство
delete sharik.bite;



