var duck = {
    type: "redheaded",
    canFly: true
}

function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}



function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

var sharik = new Dog("Sharik", "mixed", 38);
var bobik = new Dog("Bobik", "mixed", 40);
var tuzik = new Dog("Tuzik", "mixed", 40);
var dogs = [sharik, bobik, tuzik];

for (var i = 0; i < dogs.length; i++) {
    var size = "small";
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log("Dog: " + dogs[i].name
        + " is a " + size
        + " " + dogs[i].breed);
}