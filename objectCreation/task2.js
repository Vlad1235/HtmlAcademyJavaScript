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


var sharik = new Dog("Sharik", "mixed", 38);
var bobik = new Dog("Bobik", "mixed", 40);
var tuzik = new Dog("Tuzik", "mixed", 40);
var dogs = [sharik, bobik, tuzik];

for (var i = 0; i < dogs.length; i++) {
    dogs[i].bark();
}