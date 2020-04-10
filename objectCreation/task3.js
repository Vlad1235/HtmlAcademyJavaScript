/*
Старый способ. 
Создание объекта через объектные литералы.
*/
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    started: false,
    mileage: 1021,
    start: function() {
        this.started = true;
        },
    stop: function() {
        this.started = false;
        },
    drive: function() {
        if (this.started) {
            console.log(this.make + " " +
                this.model + " goes zoom zoom!");
            } else {
                console.log("Start the engine first.");
            }
        }
};
/*
Создание объектов через конструктор.
Порядок свойств ВАЖЕН!
*/
function Car(make,model,year,color,passengers,convertible,started,mileage){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.started = started;
    this.mileage = mileage;
    this.start = function(){
        this.started = true;
    }
    this.stop = function(){
        this.started = false;       
    }
    this.drive = function(){
        if (this.started) {
                console.log(this.make + " " + this.model + " goes zoom zoom!");
            } else {
                console.log("Start the engine first.");
            }
    }
}
var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);

var cars = [chevy, cadi, taxi, fiat];

for(var i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].stop();
}