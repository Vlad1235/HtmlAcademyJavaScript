"user strict";

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// const {
//     border,
//     bg
// } = options.colors;
// console.log(border);


// console.log(options["colors"]["border"]);

// console.log(options.name);
// delete options.name;
// console.log(options);

// for (let key in options) {
//     if (typeof (options[key] === 'object')) {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// console.log(Object.keys(options).length);

// const object2 = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'blue',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("Test");
//     }
// };

// object2.makeTest();



// const arr = [1, 2, 3, 4, 6];
// arr.pop();
// console.log(arr);

// const array = [1, 2, 3, 4, 6];
// array.push(10);
// console.log(array);


// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// for (let value of array) {
//     console.log(value);
// }


// const array3 = [1, 2, 3, 4, 6];
// console.log(array3.length); // 5
// array3[99] = 0;
// console.log(array3.length); // 100
// console.log(array3);

// array3.forEach(function(x,y,z){
//     console.log(`${x}: ${y} внутри массива ${z}`);
// });


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(str.join('; '));


const arr = [1, 2342, 3, 0, 6];
arr.sort(compareNumb);
console.log(arr);

function compareNumb(x, y) {
    return x - y;
}


const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);


let a = 5,
    b = a;
b = b + 5;
console.log(b); // 10
console.log(a); // 5




function realCopy(mainObj) {
    let objCopy = {};
    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

// const newNumbers = realCopy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers); // { a: 10, b: 5, c: { x: 7, y: 4 } }
// console.log(numbers); // { a: 2, b: 5, c: { x: 7, y: 4 } }

// newNumbers.c.x = 10;
// console.log(newNumbers); // { a: 10, b: 5, c: { x: 10, y: 4 } }
// console.log(numbers); // { a: 2, b: 5, c: { x: 10, y: 4 } }


const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add);
clone.d = 25;
console.log(add); // { d: 17, e: 20 }
console.log(clone); // { d: 25, e: 20 }


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'asdfaef';
console.log(newArray); // [ 'a', 'asdfaef', 'c' ]
console.log(oldArray); // [ 'a', 'b', 'c' ]


const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

    console.log(internet);


function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,6];

log(...num);


const array = ['a','b'];
const newAarray = [...array];


const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
newObj.one = 15;

console.log(q); // { one: 1, two: 2 }
console.log(newObj); // { one: 15, two: 2 }



const soldier = {
    health: 400,
    armor:  100,
    sayHello: function(){
        console.log("I'll be back");
    }
};

// const john = {
//     health: 100
// };

// john.__proto__=soldier;
// console.log(john.armor); // 100
// john.sayHello();



// const mike = {
//     health: 200
// };

// Object.setPrototypeOf(mike,soldier);

// mike.sayHello();


const alex = Object.create(soldier);
alex.sayHello();

