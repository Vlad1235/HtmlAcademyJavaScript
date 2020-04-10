// Упрощение как-бы

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

var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);

var cadiParams = {  make: "GM",
                    model: "Cadillac",
                    year: 1955,
                    color: "tan",
                    passengers: 5,
                    convertible: false,
                    mileage: 12892
};

// перерабатываем конструктор
function Car(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = function() {
        this.started = true;
    };
    this.stop = function() {
        this.started = false;
    };
    this.drive = function() {
        if (this.started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    };
}

var cadi = new Car(cadiParams);

// важно делать проверку на тип
if (cadi instanceof Car) {
    console.log("Congrats, it's a Car!");
};