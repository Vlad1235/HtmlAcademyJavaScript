/*
Задача.
Написать функцию, которая будет принимать на вход массив пассажиров, и другую функцию, которая будет проверять этот массив согласно условию (их может быть много)
*/
var passengers= [
                    { name: "James Statham", age:50, paid: false },
                    { name: "Harry Potter", age:25, paid: true },
                    { name: "Dr. Evil", age:40, paid: true }
                ]

/* firstClass function */
function processPassenges(passengerList, testFunction) {
    for (var i = 0; i < passengerList.length; i++) {
        if (testFunction(passengerList[i])) {
            return false;
        }
    }
    return true;
}

/*
Проверяем есть ли имя пассажива с черном списке
*/
function checkNoFlyList(passenger){
    return passenger.name==="Dr. Evil";
}
/* Проверяем заплатил ли пассажир за билет */
function checkNotPaid(passenger){
    return !(passenger.paid);
}


var allCanFly = processPassenges(passengers,checkNoFlyList);
if(!allCanFly){
    console.log("The plane cant take off: we have a passenger on the no-fly-list.");
} else {
    console.log("all clear: all passengers clean.");
}

var allPaid = processPassenges(passengers,checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.");
} else {
    console.log("all clear: all passengers paid.");
}
