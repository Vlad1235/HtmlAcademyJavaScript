function makeRandomCar(){
    var model = ["Lada","Chevrole","Mitsubishi","Opel","Kia"];
    var productionYear = [2000,2002,2004,2006,2008,2010];
    var transsmission = ["auto","mechanic"];
    var color = ["white","black","blue","red","grey"];
    var package = ["econom","premium"];
    var generateModel = Math.floor((Math.random()*model.length));
    var generateProductionYear = Math.floor((Math.random()*productionYear.length));
    var generateTransmission = Math.floor((Math.random()*transsmission.length));
    var generateColor = Math.floor((Math.random()*color.length));
    var generatePackage = Math.floor((Math.random()*package.length));

    var car = {
        model:model[generateModel],
        productionYear:productionYear[generateProductionYear],
        transsmission:transsmission[generateTransmission],
        color:color[generateColor],
        package:package[generatePackage]
    };

    return car;
}

function output(car){
    document.write("Final car is "+car.model+" , "+car.productionYear+" , "+car.transsmission+" , "+car.color+" , "+car.package+" .");
}

var myCar = makeRandomCar();
output(myCar);