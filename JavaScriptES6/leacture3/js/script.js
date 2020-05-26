"user strict";


let num = 20;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);



function ret() {
    let num = 50;
    //todo
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

console.log(calc(1, 2));
console.log(calc(2, 3));

function calc(a, b) {
    return a + b;
}


const logger = function () {
    console.log("Hello");
};
logger();


const calq = (a, b) => {
    const c = 5;
    return a + b + c;
};
const result = calq(4, 5);
console.log(result);


const str = "teSt";

console.log(str.toLowerCase());

const fruit = "Some fruitf";
console.log(fruit.indexOf("2"));


const logg = "Hello World";
console.log(logg.length);
console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const number = 12.2;
console.log(Math.round(number));
const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));




function first() {
    setTimeout(function () { // emulation connection to database
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}


first();
second();



function learnJS(lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}

learnJS('JavaScript',function(){
    console.log("i finished this lesson");
})


learnJava('Java', gotResult);

function learnJava(lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}

function gotResult(){
    console.log("i not yet finished");
}

