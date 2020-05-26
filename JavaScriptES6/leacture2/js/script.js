"use strict";

let numb = 50;

switch (numb) {
    case 49:
        console.log("неверно!");
        break;
    case 51:
        console.log("неверно!");
        break;
    case 50:
        console.log("верно!");
        break;
    default:
        console.log("пока!");
}

while (numb < 55) {
    console.log(numb);
    numb++;
}

do {
    console.log(numb);
    numb++;
} while (numb < 55);